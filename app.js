var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var morgan = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');

//Express App created
var app = express();

app.onAppStart = function(addr) {
  console.log("Samarth-SkillProfile web app is now Running on port:",addr.port);
}

app.use(morgan('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: false
}));
app.use(cookieParser());

app.use(express.static(path.join(__dirname, 'bower_components')));
app.use(express.static(path.join(__dirname, 'webapp')));

var jsonServer = require('json-server')
var skillHomeServer = jsonServer.create()
var skillCardServer = jsonServer.create()
var skillProfileServer = jsonServer.create()

var skillHomeRouter = jsonServer.router('skillhome.json');
var skillCardServerRouter = jsonServer.router('skillcard.json');
var skillProfileRouter = jsonServer.router('skillProfile.json');
var middlewares = jsonServer.defaults();

skillHomeServer.use(middlewares);
skillHomeServer.use(skillHomeRouter);

skillCardServer.use(middlewares);
skillCardServer.use(skillCardServerRouter);

skillProfileServer.use(middlewares);
skillProfileServer.use(skillProfileRouter);

skillHomeServer.listen(8082);
skillCardServer.listen(8083);
skillProfileServer.listen(8081);

app.use(function(req, res, next) {
  var err = new Error('Resource not found');
  err.status = 404;
  return res.status(err.status).json({
    "error": err.message
  });
});

if (app.get('env') === 'development') {
  app.use(function(err, req, res, next) {
    logger.error("Internal error in watch processor: ", err);
    return res.status(err.status || 500).json({
      "error": err.message
    });
  });
}

app.use(function(err, req, res, next) {
  logger.error("Internal error in watch processor: ", err);
  return res.status(err.status || 500).json({
    "error": err.message
  });
});

module.exports = app;