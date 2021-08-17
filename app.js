var createError = require('http-errors');
var express = require('express');
var app = express();
var path = require('path');
var cors = require('cors'); 
const bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Setup Controller Routes
var parentRouter = require('./routes/parent');
var minderRouter = require('./routes/minder');
var categoryRouter = require('./routes/category');
var availabilityMinderRouter = require('./routes/availability_minder');
var availabilityParentRouter = require('./routes/availability_parent');

//specify address and port the app will run
const hostname = '0.0.0.0';
const port = process.env.PORT || 8005;

// view engine setup
// app.set('views', path.join(__dirname, 'views'));
// app.set('view engine', 'jade');

app.use(express.json());
app.use(cors());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

//Setup app routes
app.use('/parent', parentRouter);
app.use('/minder', minderRouter);
app.use('/category', categoryRouter);
app.use('/availabilityMinder', availabilityMinderRouter);
app.use('/availabilityParent', availabilityParentRouter);

app.get("/", (req, res) => {
  res.json({
      availability: "matching",
  });
});

//Handle error responses
app.use((req, res) => {
  res.status(404).json({
    error: 404,
    message: 'Route not found',
  });
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

/**
 * Listen on provided port, on all network interfaces.
 */
app.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);    
});

// app.listen(3000, () => {
//   console.log(`Server running...`);    
// });

module.exports = app;

