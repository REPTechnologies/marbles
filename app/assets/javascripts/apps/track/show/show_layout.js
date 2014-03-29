/*jslint indent: 2, nomen: true*/
/*global Marbles */
(function () {
  "use strict";

  Marbles.module("TrackApp.Show", function (Show, Marbles, Backbone, Marionette, $, _) {
    Show.Layout = Marionette.Layout.extend({
      template: "track/show/show"
    });
  });

}());
