const Transform = require('stream').Transform;
var util = require('util');
util.inherits(Filter, Transform);

function Filter(options) {
  if (!(this instanceof Filter)) return new Filter(options);

  Transform.call(this, options);
  this.min = options.min || 100;
  this.max = options.max || 1000;
};

Filter.prototype._transform = function(chunk, encoding, done) {
    var number = parseInt(chunk.toString());
    if( number > this.min && number < this.max ) {
        this.push(''+number);
    }
    done();
};

module.exports = Filter;