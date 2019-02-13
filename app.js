var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var hbs = require ('express-handlebars')

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var motorbikesRouter = require('./routes/motorbikes');
var bodyParser = require('body-parser');
// var updateRouter = require('./routes/motorbikes')
// app.use(bodyParser.urlencoded({ extended: true }));

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs',);

app.engine('hbs', hbs({
  defaultLayout: 'layout',
  extname: 'hbs'
}))

// app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(bodyParser.urlencoded({extended:false}));
// router setup
app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/motorbikes', motorbikesRouter);
app.post('motorbikes/:id', motorbikesRouter);
app.post('cars/:id', indexRouter);

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
  res.render('error');
});

module.exports = app;
  