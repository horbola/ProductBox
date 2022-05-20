var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var devRouter = require('./dev/experim/routes/dev');
var indexRouter = require('./routes/index');
var productBoxRouter = require('./routes/productBox.js');



var app = express();
var appName = "/factory";

// view, static folders and view engine setup
// separate decleration of view folders like static folders doesn't work
app.set('views', [__dirname + '/views', __dirname + '/dev/experim/views']);
app.set('view engine', 'jade');
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.static(path.join(__dirname, 'dev/experim/public')));



app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

app.use(appName+'/dev', devRouter);

app.use(appName+'/', indexRouter);
app.use(appName+'/product-box/', productBoxRouter);



// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('errors/404');
});

module.exports = app;
