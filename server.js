const express = require('express');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const aboutRouter = require('./routes/aboutRouter');
const adoptRouter = require('./routes/adoptRouter');
// const contactRouter = require('./routes/contactRouter');
// const favoritesRouter = require('./routes/favoritesRouter');
// const homeRouter = require('./routes/homeRouter');
// const matchRouter = require('./routes/matchRouter');
// const volunteerRouter = require('./routes/volunteerRouter');

const hostname = 'localhost';
const port = 3000;

const app = express();
app.use(morgan('dev'));
app.use(bodyParser.json());

app.use('/about', aboutRouter);
app.use('/adopt', adoptRouter);
// app.use('/contact', contactRouter);
// app.use('/favorites', favoritesRouter);
// app.use('/home', homeRouter);
// app.use('/match', matchRouter);
// app.use('/volunteer', volunteerRouter);

app.use(express.static(__dirname + '/public'));

app.use((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/html');
  res.end('<html><body><h1>This is an Express server</h1></body></html>');
});

app.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`)
});