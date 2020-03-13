const express = require('express');

const favoritesRouter = express.Router();

favoritesRouter.route('/')
.all((req, res, next) => {
  res.statusCode = 200;
  res.setHeader = ('Content-Type', 'text/plain');
  next();
})
.get((req, res) => {
  res.end('Will send Favorites info');
})
.post((req, res) => {
  res.statusCode = 403;
  res.end('POST operation not supported on /favorites');
})
.put((req, res) => {
  res.statusCode = 403;
  res.end('PUT operation not supported on /favorites');
})
.delete((req, res) => {
  res.end(`Will DELETE ${req.body.name}`);
});

module.exports = favoritesRouter;