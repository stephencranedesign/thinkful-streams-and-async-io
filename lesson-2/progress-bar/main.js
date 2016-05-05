function ProgressBar(onStart, onProgress, onEnd) {
    this.onStart = onStart || function() {};
    this.onProgress = onProgress || function() {};
    this.onEnd = onEnd || function() {};
};
ProgressBar.prototype.val = 0;
ProgressBar.prototype.endVal = 100;

ProgressBar.prototype.start = function() {
  this.check();
};
ProgressBar.prototype.end = function(argument) {
    this.onEnd();
};
ProgressBar.prototype.progress = function(argument) {
    this.onProgress(this.val);
    this.check();
};
ProgressBar.prototype.check = function() {
    this.val++;
  if(this.val == this.endVal) { this.end(); return; }
  else if( (this.val % 10 ) == 0 ) { this.progress(); return; }
  else { this.check(); return; }
}

var test = new ProgressBar(
    function() { console.log('start'); },
    function(val) { console.log('progress', val); },
    function() { console.log('end'); } 
);

test.start();