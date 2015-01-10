(function () {
  'use strict';

  Marbles.module('PollApp', function (PollApp, Marbles, Backbone, Marionette, $, _) {
    PollApp.Router = Marionette.AppRouter.extend({
      appRoutes: {
        poll: 'showPoll'
      }
    });

    Marbles.vent.on('poll:show', function () {
      M.fn.nav('poll');
    });

    var demux = {
      showPoll: function () {
        return new PollApp.Show.Controller();
      }
    };

    Marbles.addInitializer(function () {
      PollApp.router = new PollApp.Router({controller: demux});
    });

  });

}());
