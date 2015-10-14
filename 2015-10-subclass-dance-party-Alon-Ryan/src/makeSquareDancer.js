var makeSquareDancer = function(top, left, time){
  makeDancer.apply(this, arguments);
  //store position of top
  this.$node.addClass('squareDancer')
  this.setTime = time;
}


makeSquareDancer.prototype = Object.create(makeDancer.prototype);
makeSquareDancer.prototype.constructor = makeSquareDancer;
makeSquareDancer.prototype.step = function(){
  var $currentNode = this.$node;
  var timer = this.setTime;
  var square = function() {
    $currentNode.rotate({
      angle: 0,
      center: ["50%", "100%"],
      animateTo:90,
      duration: timer
    });
    $currentNode.animate({
      left: '-=200'
    }, timer, function() {
      $currentNode.rotate({
        angle: 90,
        center: ["50%", "100%"],
        animateTo:180,
        duration: timer
      });
      $currentNode.animate({
        top: '-=200'
      }, timer, function() {
        $currentNode.rotate({
          angle: 180,
          center: ["50%", "100%"],
          animateTo:270,
          duration: timer
        });
        $currentNode.animate({
          left: '+=200'
        }, timer, function() {
          $currentNode.rotate({
            angle: 270,
            center: ["50%", "100%"],
            animateTo:360,
            duration: timer
          });
          $currentNode.animate({
            top: '+=200'
          }, timer, function() {
            square();
          });
        });
      });
    });
  };
  square();
}