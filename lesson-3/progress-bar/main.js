var events = require('events');
var util = require('util');

var ProgressBar = function(config) {
    events.EventEmitter.call(this);
    this.onStart = config.onStart || function() {};
    this.onProgress = config.onProgress || function() {};
    this.onEnd = config.onEnd || function() {};

    this.listeners();
};

util.inherits(ProgressBar, events.EventEmitter);

ProgressBar.prototype.val = 0;
ProgressBar.prototype.endVal = 100;

ProgressBar.prototype.check = function() {
    this.val++;
    if(this.val == this.endVal) { this.emit('end'); return; }
    else if( (this.val % 10 ) == 0 ) { this.emit('progress'); return; }
    else { this.emit('check'); return; }
};
ProgressBar.prototype.end = function(argument) {
    this.onEnd();
};
ProgressBar.prototype.progress = function(argument) {
    this.onProgress(this.val);
    this.check();
};
ProgressBar.prototype.removeTest = function() { 
    console.log('testing removeListener') 
    this.removeListener('check', this.removeTest);
};
ProgressBar.prototype.listeners = function() {
    // console.log('this: ', this);
    this.on('start', this.check);
    this.on('check', this.removeTest);
    this.on('check', this.check);
    this.on('progress', this.progress);
    this.on('end', this.end);
};

var progress = new ProgressBar({
    onStart: function() { console.log('start'); },
    onProgress: function(val) { console.log('progress', val); },
    onEnd: function() { console.log('end'); }
});

progress.emit('start');