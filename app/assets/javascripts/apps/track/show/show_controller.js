/*jslint indent: 2, nomen: true*/
/*global Marbles */
(function () {
  "use strict";

  Marbles.module("TrackApp.Show", function (Show, Marbles, Backbone, Marionette, $, _) {

    function getShowView() {
      return new Show.View();
    }

    Show.Controller = {
      showTrack: function () {
        Marbles.mainRegion.show(getShowView());
      }
    };
  });

}());
