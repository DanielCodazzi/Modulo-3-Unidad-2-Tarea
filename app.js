var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var novedadesRouter = require('./routes/novedades'); //novedades.js
var contactoRouter = require('./routes/contacto'); //contacto.js
var probando1Router = require('./routes/probando1'); //contacto.js
var probando2Router = require('./routes/probando2'); //contacto.js


var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/novedades', novedadesRouter);
app.use('/contacto', contactoRouter);
app.use('/probando1', probando1Router);
app.use('/probando2', probando2Router);

app.get('/prueba', function (req, res) { res.send('Bienvenido a la pagina de prueba') } //prueba.hbs
)

app.get('/destacados', function (req, res) { res.send('Bienvenido a la pagina de DESTACADOS!') } //prueba.hbs
)

app.get('/nosotros', function (req, res) { res.send('Bienvenido a la pagina de NOSOTROS!') } //prueba.hbs
)

app.get('/prueba2', function (req, res) { res.render('Prueba') } //prueba.hbs

)

app.get('/probando1', function (req, res) { res.render('probando1') }

)

app.get('/probando2', function (req, res) { res.render('probando2') }

)

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
