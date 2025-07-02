const express = require('express');
const serverless = require('serverless-http');

const app = express();

app.get('/', (req, res) => {
  res.send('Hello, world!');
});

app.get('/about', (req, res) => {
  res.send('About this application');
});

module.exports.handler = serverless(app);
