let createError = require('http-errors')
    , express = require('express')
    , cookieParser = require('cookie-parser')
    , bodyParser = require('body-parser')
    , logger = require('morgan');
let app = express();

// include Routes Here
let index = require('./routes/index');

// end Routs


app.use(express.static('node_modules'));

app.use(logger('dev'));

app.use(express.json())
app.use(express.urlencoded({ extended: true }));

app.use(cookieParser());

app.use('/', index);

// to return not found 
app.use(function (req, res, next) {
    next(createError(404));
});


app.use(function (err, req, res, next) {
    // set locals, only providing error in development
    res.locals.message = err.message;
    res.locals.error = req.app.get('env') === 'development' ? err : {};

    // render the error page
    res.status(err.status || 500);
    res.json({ error: "Not Working" });
});

module.exports = app;
