var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');


// Set routes
var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var reviewRouter = require('./routes/review')

// 把各個路徑包成模組，在 app.js 裡面把每個模組讀取進來
// 在路由的檔案裡面，是用 res.render 將靜態的 html 檔案以 ejs 的形式從 views 拉進來渲染到頁面上

var app = express();

// view engine setup
// 這邊用 ejs-locals 去實踐layout template
var engine = require('ejs-locals');
app.engine('ejs',engine);
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

// 設定路由
app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/review', reviewRouter);


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
