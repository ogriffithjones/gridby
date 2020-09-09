(function() {

  // Try Require Vue
  try {
    var Vue = require('vue');
  } catch (e) {
    // Else use global vue instance
  }

  // Directive
  var gridby = Vue.directive('gridby', {
    inserted: function(el, node){
        new Swappable(el, node.value);
    }
  });

  // Check we are in Nodejs
  try {
    module.exports = gridby;
  } catch (e) {
    // Else register in browser
  }

})();
