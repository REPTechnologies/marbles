(function () {
  'use strict';

  Marbles.module('TrendsApp', function (TrendsApp, Marbles, Backbone, Marionette, $, _) {
    TrendsApp.Router = Marionette.AppRouter.extend({
      appRoutes: {
        trends: 'showTrends'
      }
    });

    Marbles.vent.on('trends:show', function () {
      M.fn.nav('trends');
    });

    var demux = {
      showTrends: function () {
        return new TrendsApp.Show.Controller();
      }
    };

    Marbles.addInitializer(function () {
      TrendsApp.router = new TrendsApp.Router({controller: demux});
    });
  });

}());
