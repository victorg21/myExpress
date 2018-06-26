var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var favicon = require('serve-favicon');

var cookieRouter = require('./routes/cookie');
var usersRouter = require('./routes/users');
var homePageRouter = require('./routes/homePage');
var productRouter = require('./routes/product');
var bmiRouter = require('./routes/bmi');
var jsonRouter = require('./routes/jsonExample');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');
app.set('view cache', true);

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', homePageRouter);
app.use('/home', homePageRouter);
app.use('/index', homePageRouter);
app.use('/users', usersRouter);
app.use('/product', productRouter);
app.use('/bmi', bmiRouter);
app.use('/jsonex', jsonRouter);
app.use('/cookie', cookieRouter);
app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));

// catch 404 and forward to error handler
app.use(function(req, res, next) {
	console.log("4040404040404040");
	next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
	console.log("eeeeeeeeeeeee");
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error', {err:err});
});

module.exports = app;
