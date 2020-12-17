# 配置

## 写入对应配置文件

```bash
yarn add dotenv-cli --dev
```

## 配置 less

```bash
yarn add less-loader less --dev
```

## 打包进度条

webpack 插件

```bash
yarn add progress-bar-webpack-plugin --dev
```

## 参考地址

[create-react-app 优雅定制指南](https://zhuanlan.zhihu.com/p/96103181)

[react 不使用 eject 的配置方法](https://blog.csdn.net/qq_21567385/article/details/108383083)

[参考地址](https://www.mk2048.com/blog/blog_hjjjihhhakhib.html)

## 配置文件载入

```bash
npm i dotenv-cli -g
```

## ts 配置文件不支持 paths

[参考地址](https://www.yuque.com/tuanchang-d1rgt/xiycpz/fy5az7?language=en-us)

## 懒加载

```bash
yarn add @loadable/component # 或者
yarn add react-loadable # 或者
# 使用 react 自带 lazy
```

## lodash 按需加载

```bash
yarn add lodash-webpack-plugin --dev
```

增加如下代码

```js
const LodashWebpackPlugin = require('lodash-webpack-plugin')

addWebpackPlugin({
  new LodashWebpackPlugin({
  collections: true,
  paths: true
  }),
 })
```

## split-chunk 策略

[参考地址](https://juejin.cn/post/6844903993647316999#heading-11)