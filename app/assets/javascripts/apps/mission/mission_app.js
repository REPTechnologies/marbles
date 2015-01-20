(function () {
  'use strict';

  Marbles.module('MissionApp', function (MissionApp, Marbles, Backbone, Marionette, $, _) {
    MissionApp.Router = Marionette.AppRouter.extend({
      appRoutes: {
        'mission': 'showMission'
      }
    });

    Marbles.vent.on('mission:show', function () {
      M.fn.nav('mission');
    });

    var demux = {
      showMission: function () {
        return new MissionApp.Show.Controller();
      }
    };

    Marbles.addInitializer(function () {
      MissionApp.router = new MissionApp.Router({controller: demux});
    });
  });

}());
