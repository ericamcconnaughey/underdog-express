const express = require('express');
const bodyParser = require('body-parser');

const matchRouter = express.Router();

matchRouter.route('/')
.all((req, res, next) => {
  res.statusCode = 200;
  res.setHeader = ('Content-Type', 'text/plain');
  next();
})
.get((req, res) => {
  res.end('Will send Match info');
})
.post((req, res) => {
  res.statusCode = 403;
  res.end('POST operation not supported on /match');
})
.put((req, res) => {
  res.end(`Will update ${req.body.name} on /match`);
})
.delete((req, res) => {
  res.statusCode = 403;
  res.end('DELETE operation not supported on /match');
});

module.exports = matchRouter;