var RandomNumber = require('./RandomNumber.js');
var Filter = require('./Filter');
var Log = require('./log');

var randomNumber = new RandomNumber();
var filter = new Filter({min: 300, max: 350});
var log = new Log();

randomNumber.pipe(filter).pipe(log);