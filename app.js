var http = require('http');
var express = require('express');
var apiroutes = express.Router();
var jwt = require('jsonwebtoken');
var path = require('path');
var favicon = require('serve-favicon');
var morgan = require('morgan');
var mongoose = require('mongoose');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var jsonServer = require('json-server');


var authRoutes = require('./webserver/auth/authrouter');
var userRoutes = require('./webserver/user/userRoutes');
mongoose.connect('mongodb://localhost:27017/samarthplatformdb');

//Express App created
var app = express();

app.onAppStart = function(addr) {
    console.log("Samarth-SkillProfile web app is now Running on port:", addr.port);
}

app.use(morgan('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: false
}));
app.use(cookieParser());

app.use(express.static(path.join(__dirname, 'bower_components')));
app.use(express.static(path.join(__dirname, 'webapp')));

app.use('/api', jsonServer.router('samarthdb.json'));


app.use('/auth', authRoutes);
app.use('/user', userRoutes);

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
