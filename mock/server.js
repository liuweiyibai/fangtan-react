const express = require('express');
const Mock = require('mockjs'); //引入mock模块
const app = express();
const api = express();

app.use('/api', api);

api.get('/test', function (req, res) {
  res.json(
    Mock.mock({
      code: 200,
      'data|1-9': [
        {
          'name|5-8': /[a-zA-Z]/,
          'id|+1': 1,
          'value|0-500': 20,
        },
      ],
    }),
  );
});
api.post(`/user/login`, (req, res) => {
  res.json({
    code: 200,
    data: {
      username: 'james',
      token: '2222',
    },
    message: 'success',
  });
});

// app.use(function (req, res, next) {
//   res.header('Access-Control-Allow-Origin', '*');
//   res.header('Access-Control-Allow-Methods', 'PUT, GET, POST, DELETE, OPTIONS');
//   res.header('Access-Control-Allow-Headers', 'X-Requested-With');
//   res.header('Access-Control-Allow-Headers', 'Content-Type');
//   next();
// });

console.log('===============mock server is running 7001================');

app.listen('7001');
