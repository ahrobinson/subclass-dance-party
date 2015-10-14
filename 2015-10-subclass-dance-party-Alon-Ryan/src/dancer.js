// Creates and returns a new dancer object that can step
var makeDancer = function(top, left, timeBetweenSteps){
  // use jQuery to create an HTML <span> tag
  this.$node = $('<span class="dancer"></span>');
  this.timer = timeBetweenSteps;
  this.setPosition(top, left);
  this.step();
  this._left = left;
  this.a = true;
};

makeDancer.prototype.step = function(){
  // the basic dancer doesn't do anything interesting at all on each step,
  // it just schedules the next step
  setTimeout(this.step.bind(this), this.timer);
};

makeDancer.prototype.setPosition = function(top, left){
  // Use css top and left properties to position our <span> tag
  // where it belongs on the page. See http://api.jquery.com/css/
  //
  var styleSettings = {
    top: top,
    left: left
  };
  this.$node.css(styleSettings);
};

makeDancer.prototype.lineUp = function(){
  var ran = Math.random() * 1200

  if(this.a){
    for(var i = 0; i < window.dancers.length; i++){
        window.dancers[i].$node.css({left: Math.random() * 1200, top: Math.random() * 678})       
    }
  } else {
    for(var i = 0; i < window.dancers.length; i++){
        window.dancers[i].$node.css({left: ran})       
    }
  }

  this.a = !this.a;
}
  // now that we have defined the dancer object, we can start setting up important parts of it by calling the methods we wrote
  // // this one sets the position to some random default point within the body
  // dancer.setPosition(top, left);



