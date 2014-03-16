Marbles.module("EventApp", function (EventApp, Marbles, Backbone, Marionette, $, _) {
  EventApp.Router = Marionette.AppRouter.extend({
    appRoutes: {}
  });

  var API = {};

  EventApp.addInitializer(function() {
    router = new EventApp.Router({
      controller: API
    });
  });
});
