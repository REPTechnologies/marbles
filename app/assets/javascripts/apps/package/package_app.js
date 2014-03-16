Marbles.module("PackageApp", function (PackageApp, Marbles, Backbone, Marionette, $, _) {
  PackageApp.Router = Marionette.AppRouter.extend({
    appRoutes: {}
  });

  var API = {};

  PackageApp.addInitializer(function() {
    router = new PackageApp.Router({
      controller: API
    });
  });
});
