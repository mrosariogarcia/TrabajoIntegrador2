var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

// instalamos session
const session = require('express-session');

var indexRouter = require('./routes/index');
var productRouter = require("./routes/product");
var usersRouter = require("./routes/users");

var app = express();


// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

// Aca "usamos" session
app.use(session ({
  secret: 'Udesa TI', 
  saveUninitialized: true, 
  resave: false, 
}));

app.use(function(req, res, next) {
  //console.log('Middleware de sesión');
  //console.log('req.session:', req.session);

  if (req.session.user !== undefined) {
    res.locals.user = req.session.user;
   // console.log('Entre a locals');
  //console.log(req.locals);
    return next()
  } 
  return next()
});

app.use(function(req, res, next) {

  if(req.cookies.userId != undefined && req.session.user == undefined){
    // guardar datos para no tener que loguearse continuamente
    let idCookie = req.cookies.userId;
    
    //buscar en la base de datos el usuario con el ID de la Cookie
    db.User.findByPk(idCookie)
      .then(function(user){
       // console.log("middleware de la cookie")
        req.session.user = user 
        // si el usuario eligio recordarse, ya va a estar logueado
        //console.log("en la cookie middleware")
        res.locals.user = user //guardamos en locals tambien
      
      return next()

      })

      .catch(function (error) {
        //console.log("Error en cookies", error);
      });
  }

  else{ return next() }

});

app.use('/', indexRouter);
app.use('/product',productRouter);
app.use('/users',usersRouter);



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
