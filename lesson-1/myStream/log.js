var util = require('util');
var Writable = require('stream').Writable;
util.inherits(Log, Writable);

function Log(options) {
  if (!(this instanceof Log)) return new Log(options);

  Writable.call(this, options);
}

Log.prototype._write = function(chunk, encoding, done) {
    console.log(chunk.toString());
    done();
};

module.exports = Log;