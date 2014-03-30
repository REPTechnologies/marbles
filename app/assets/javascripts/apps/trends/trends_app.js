/*jslint indent: 2, nomen: true*/
/*global Marbles */
(function () {
  "use strict";

  Marbles.module("TrendsApp", function (TrendsApp, Marbles, Backbone, Marionette, $, _) {
    TrendsApp.Router = Marionette.AppRouter.extend({
      appRoutes: {
        trends: 'showTrends'
      }
    });

    var API = {
      showTrends: function () {
        TrendsApp.Show.Controller.showTrends();
      }
    };
    
    Marbles.vent.on('trends:show', function () {
      M.fn.nav('trends');
      API.showTrends();
    });

    Marbles.addInitializer(function () {
      new TrendsApp.Router({
        controller: API
      });
    });
  });

}());
