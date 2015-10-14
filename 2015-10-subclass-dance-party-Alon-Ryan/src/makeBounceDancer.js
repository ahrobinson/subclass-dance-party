var makeBounceDancer = function(top, left, time){
  makeDancer.apply(this, arguments);
  this.$node.addClass('bounceDancer')

}


makeBounceDancer.prototype = Object.create(makeDancer.prototype);
makeBounceDancer.prototype.constructor = makeBounceDancer;
makeBounceDancer.prototype.step = function(){
  var position = top;
  var $currentNode = this.$node;
  var decrease = '-=50';
  var increase = '+=50'
  var bounce = function() {
    $currentNode.animate({
      top: decrease
    }, 500, function() {
      $currentNode.animate({
        top: increase
      }, 500, function() {
        bounce();
      });
    });
  };
  bounce();
}