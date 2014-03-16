var Marbles = new Marionette.Application();

Marbles.addRegions({
  //Add application regions here
});

//Navigate to specific route
Marbles.navigate = function (route, options) {
  options || (options = {});
  Backbone.history.navigate(route, options);
};

//Returns current route
Marbles.getCurrentRoute = function () {
  return Backbone.history.fragment;
};

Marbles.on('initialize:after', function () {
  //Things to do after app initialize
  if (Backbone.history) {
    Backbone.history.start({
      pushState: true
    });
  }
});
