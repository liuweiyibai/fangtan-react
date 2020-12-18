const path = require('path');
const {
  override,
  addDecoratorsLegacy,
  addLessLoader,
  fixBabelImports,
  addWebpackAlias,
  overrideDevServer,
  addPostcssPlugins,
  addBundleVisualizer,
  addWebpackPlugin,
  adjustStyleLoaders,
} = require('customize-cra');

const LodashWebpackPlugin = require('lodash-webpack-plugin');
const ScriptExtHtmlWebpackPlugin = require('script-ext-html-webpack-plugin');
const WebpackBar = require('webpackbar');
const DashboardPlugin = require('webpack-dashboard/plugin');
const CircularDependencyPlugin = require('circular-dependency-plugin');
const WebpackBuildNotifierPlugin = require('webpack-build-notifier');

const resolve = (dir) => path.resolve(__dirname, dir);
const join = (dir) => path.join(__dirname, dir);

const isProduction = process.env.NODE_ENV === 'production';

const publicPath = isProduction
  ? 'https://liuweiyibai.github.io/fangtan-react/'
  : '/';

function invade(target, name, callback) {
  target.forEach((item) => {
    if (item.constructor.name === name) {
      callback(item);
    }
  });
}

// 自定义配置
const addCustomize = () => (config) => {
  config.output.publicPath = publicPath;
  if (!isProduction) {
    // 循环检测工具
    config.plugins.push(
      new CircularDependencyPlugin({
        exclude: /node_modules/,
        include: /src/,
        failOnError: true,
        allowAsyncCycles: false,
        cwd: process.cwd(),
      }),
      // 本地日志输出
      new DashboardPlugin(),
    );
  }
  if (isProduction) {
    invade(config.optimization.minimizer, 'TerserPlugin', (e) => {
      // 去除 LICENSE.txt
      e.options.extractComments = false;
      // 去除生产环境 console.log
      e.options.terserOptions.compress.drop_console = true;
    });

    // 美化打包后 js 文件名
    config.output.chunkFilename = config.output.chunkFilename.replace(
      '.chunk',
      '',
    );

    // 美化打包后 css 文件名
    invade(config.plugins, 'MiniCssExtractPlugin', (e) => {
      e.options.chunkFilename = e.options.chunkFilename.replace('.chunk', '');
    });

    config.optimization.splitChunks = {
      chunks: 'all',
      cacheGroups: {
        vendors: {
          test: /[\\/]node_modules[\\/]/,
          name: 'vendors',
          minSize: 50000,
          minChunks: 1,
          chunks: 'initial',
          priority: 1, // 该配置项是设置处理的优先级，数值越大越优先处理，处理后优先级低的如果包含相同模块则不再处理
        },
        commons: {
          test: /[\\/]src[\\/]/,
          name: 'commons',
          minSize: 50000,
          minChunks: 2,
          chunks: 'initial',
          priority: -1,
          reuseExistingChunk: true, // 这个配置允许我们使用已经存在的代码块
        },
        antdMobile: {
          name: 'antd-mobile', // 单独将 antd-design 拆包
          priority: 20,
          test: /[\\/]node_modules[\\/]antd-mobile[\\/]/,
          chunks: 'all',
        },
        lodash: {
          name: 'lodash', // 单独将 lodash 拆包
          priority: 20,
          test: /[\\/]node_modules[\\/]lodash[\\/]/,
          chunks: 'all',
        },
        reactLib: {
          name: 'react-lib', // 单独将 react系列 拆包
          priority: 20,
          test: /[\\/]node_modules[\\/](react|react-dom|react-router-dom)[\\/]/,
          chunks: 'all',
        },
      },
    };

    config.plugins.push(
      new ScriptExtHtmlWebpackPlugin({
        // `runtime` must same as runtimeChunk name. default is `runtime`
        inline: /runtime\..*\.js$/,
      }),
    );

    config.optimization.runtimeChunk = 'single';
  }

  return config;
};

// devserver 配置
const devServerConfig = () => (config) => {
  return {
    ...config,
    // compress: true,
    proxy: {
      '/api': {
        target: 'localhost:7001',
        changeOrigin: true,
        pathRewrite: {
          '^/api': '/api',
        },
      },
    },
  };
};

module.exports = {
  webpack: override(
    // 增加别名
    addWebpackAlias({
      '@': resolve('src'),
    }),

    // 增加装饰器
    addDecoratorsLegacy(),

    // 添加 less 的使用
    addLessLoader({
      // 也可以在上面 loader 中添加
      /**
       * 会添加到每一个 less 文件之前，所以不能添加全局样式文件，和cssreset等
       */
      additionalData: `@import "${join('./src/styles/variable.less')}";`,
      lessOptions: {
        strictMath: true,
        noIeCompat: true,
        modifyVars: {},
        cssLoaderOptions: {},
        cssModules: {
          localIdentName: '[path][name]__[local]--[hash:base64:5]',
        },
      },
    }),

    // 按需引入组件
    fixBabelImports('antd-mobile', {
      style: 'css',
      libraryDirectory: 'es',
    }),

    // lodash 按需加载
    fixBabelImports('lodash', {
      libraryDirectory: 'es',
      camel2DashComponentName: false,
    }),

    // postcss 插件
    addPostcssPlugins([
      require('postcss-px-to-viewport')({
        viewportWidth: 375, // 视窗的宽度，对应的是我们设计稿的宽度，一般是375
        unitPrecision: 3, // 指定`px`转换为视窗单位值的小数位数（很多时候无法整除）
        viewportUnit: 'vw', // 指定需要转换成的视窗单位，建议使用
        selectorBlackList: ['.am', 'ignore'], // 指定不转换为视窗单位的类，可以自定义，可以无限添加,建议定义一至两个通用的类名
        minPixelValue: 1, // 小于或等于`1px`不转换为视窗单位，你也可以设置为你想要的值
        mediaQuery: false, // 允许在媒体查询中转换`px`
        exclude: [/node_modules/],
        propList: ['*', '!border-radius'],
      }),
      require('postcss-normalize')(),
    ]),

    process.env.REACT_APP_BUNDLE_VISUALIZE == 1 &&
      addBundleVisualizer({
        analyzerMode: 'server',
      }),

    addCustomize(),

    addWebpackPlugin(
      // 进度条
      new WebpackBar({
        profile: true,
      }),

      // lodash 按需加载
      new LodashWebpackPlugin({
        collections: true,
        paths: true,
      }),

      new WebpackBuildNotifierPlugin({
        title: 'mission complete',
        suppressSuccess: true,
      }),
    ),

    // 开发模式下生成  css souceMap
    !isProduction &&
      adjustStyleLoaders(({ use }) => {
        // use [] 包括所有的 style 系列 loader
        const [, css, postcss, resolve, processor] = use;
        css.options.sourceMap = true; // css-loader
        postcss.options.sourceMap = true; // postcss-loader
        if (resolve) {
          resolve.options.sourceMap = true; // resolve-url-loader
        }

        if (processor && processor.loader.includes('less-loader')) {
          processor.options.sourceMap = true; // less-loader

          // 会添加到每一个 less 文件之前，所以不能添加全局样式文件，和cssreset等
          // 建议添加less 变量函数等
          // 其效果和上面 addLessLoader 一样，二者保留其一即可
          // use.push({
          //   loader: 'style-resources-loader',
          //   options: {
          //     patterns: path.resolve(__dirname, 'src/styles/global.less'), //全局引入公共的scss 文件
          //   },
          // });
        }
      }),
  ),

  devServer: overrideDevServer(devServerConfig()),

  paths: function (paths, env) {
    // 配置打包后的文件位置
    let dir = process.env.BUILD_PATH || 'dist';
    paths.appBuild = join(dir);
    return paths;
  },
};
