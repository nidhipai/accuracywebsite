var express = require('express');
var exphbs = require('express-handlebars');
var path = require('path');
var createError = require('http-errors');
var cookieParser = require("cookie-parser");
var logger = require("morgan");
var sassMiddleware = require("node-sass-middleware");

var apiRouter = require("./routes/api");
var indexRouter = require('./routes/index');

var app = express();

// view engine configuration
var viewEngine = exphbs.create({
    extname: '.hbs',
    defaultLayout: 'main',
    helpers: {
        'times': (n, block) => { 
            let accum = '';
            for (let i = 0; i < n; i++) accum += block.fn(i);
            return accum;
        }
    }
})

app.engine('hbs', viewEngine.engine);
app.set('view engine', 'hbs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
// app.use(sassMiddleware({
//   src: path.join(__dirname, 'public'),
//   dest: path.join(__dirname, 'public'),
//   indentedSyntax: true, // true = .sass and false = .scss
//   sourceMap: true,
//   outFile: 'css/style.css'
// }));
app.use(express.static(path.join(__dirname, 'public')));

// routes
app.use('/', indexRouter);
app.use('/api', apiRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
    next(createError(404));
}) 

app.use(function(err, req, res, next) {
    // set locals, only providing error in development
    res.locals.message = err.message;
    res.locals.error = req.app.get('env') === 'development' ? err : {};
  
    // render the error page
    res.status(err.status || 500);
    res.render('error');
  });

module.exports = app;
