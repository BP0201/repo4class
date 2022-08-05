const express = require('express');
const ExpressError = require('./expressError')
const app = express();

const { mean, median, mode, convertStringsToNums } = require('./m')


app.use(express.json());
app.use(express.urlencoded({ extended: true }));



app.get('/mean', function(req, res, next) {
    if (!req.query.nums) {
        throw new ExpressError('You must pass a query key of nums with a comma-separated list of numbers.', 400)
    }
    let numStrs = req.query.nums.split(',')
    let nums = convertStringsToNums(numStrs)
    if (nums instanceof Error) {
        throw new ExpressError(nums.message, 400)
    }
    let result = {
        operation: 'mean',
        result: mean(nums)
    }
    return res.send(result)
});

app.get('/median', function(req, res, next) {
    if (!req.query.nums) {
        throw new ExpressError('You must pass a query key of nums with a comma-separated list of numbers.', 400)
    }
    let numStrs = req.query.nums.split(',')
    let nums = convertStringsToNums(numStrs)
    if (nums instanceof Error) {
        throw new ExpressError(nums.message, 400)
    }

    let result = {
        operation: 'median',
        result: median(nums)
    }
    return res.send(result)
});

app.get('/mode', function(req, res, next) {
    if (!req.query.nums) {
        throw new ExpressError('You must pass a query key of nums with a comma-separated list of numbers.', 400)
    }
    let numStrs = req.query.nums.split(',')
    let nums = convertStringsToNums(numStrs)
    if (nums instanceof Error) {
        throw new ExpressError(nums.message, 400)
    }

    let result = {
        operation: 'mode',
        result: mode(nums)
    }
    return res.send(result)
});


app.use(function (req, res, next) {
    const err = new ExpressError("Not Found",404);
  
    // pass the error to the next piece of middleware
    return next(err);
});
  
  /** general error handler */
  
app.use(function (err, req, res, next) {
    res.status(err.status || 500);
  
    return res.json({
      error: err
    });
});


app.listen(3000, function () {
  console.log('App on port 3000');
})
