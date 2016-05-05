var Alphabet = require('./alphabet');
var Cache = require('./cache');

var alpha = new Alphabet();
var cache = new Cache({key: 'alpha1'});

alpha.pipe(cache);

alpha.on('data', function(chunk) {
    console.log(chunk.toString());
});