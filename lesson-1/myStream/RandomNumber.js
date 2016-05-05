var util = require('util');
var Readable = require('stream').Readable;
util.inherits(RandomNumber, Readable);

function RandomNumber(options) {
  if (!(this instanceof RandomNumber)) return new RandomNumber(options);
  Readable.call(this, options);
  this._index = 0;
  this._end = 100;
};

RandomNumber.prototype._read = function() {
  var number = this.generate();
  var buf = new Buffer(number);
  this.push(buf);
    
  this._index++;
  if(this._index >= this._end) { this.push(null); }
};

RandomNumber.prototype.generate = function() { return parseInt(Math.random()*1000).toString(); };

module.exports = RandomNumber;