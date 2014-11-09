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

    Marbles.commands.setHandler('show:trends:summary:trending', function (region, ndxPoll, up) {
      return new TrendsApp.Summary.Trending.Controller({
        region: region,
        ndxPoll: ndxPoll,
        up: !!up
      });
    });

    Marbles.commands.setHandler('show:trends:summary:recommended', function (region, ndxPoll) {
      return new TrendsApp.Summary.Recommended.Controller({
        region: region,
        ndxPoll: ndxPoll
      });
    });

    Marbles.commands.setHandler('show:trends:summary:metrics', function (region, ndxEvent) {
      return new TrendsApp.Summary.Metrics.Controller({
        region: region,
        ndxEvent: ndxEvent
      });
    });

    Marbles.commands.setHandler('show:trends:recent', function (region, ndxPoll) {
      return new TrendsApp.Recent.Controller({
        region: region,
        ndxPoll: ndxPoll
      });
    });
  });

}());
