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

    Marbles.commands.setHandler('show:foci:line:chart', function (region, ndxPoll) {
      return new TrendsApp.FociLine.Controller({
        region: region,
        ndx: ndxPoll
      });
    });

    Marbles.commands.setHandler('show:trends:summary', function (region, ndxPoll, ndxEvent) {
      return new TrendsApp.Summary.Controller({
        region: region,
        ndxPoll: ndxPoll,
        ndxEvent: ndxEvent
      });
    });
  });

}());
