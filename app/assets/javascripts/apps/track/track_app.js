/*jslint indent: 2, nomen: true*/
/*global Marbles */
(function () {
  "use strict";

  Marbles.module("TrackApp", function (TrackApp, Marbles, Backbone, Marionette, $, _) {
    TrackApp.Router = Marionette.AppRouter.extend({
      appRoutes: {
        track: 'showTrack'
      }
    });

    var API = {
      showTrack: function () {
        TrackApp.Show.Controller.showTrack();
      }
    };

    Marbles.addInitializer(function () {
      new TrackApp.Router({
        controller: API
      });
    });
  });

}());
