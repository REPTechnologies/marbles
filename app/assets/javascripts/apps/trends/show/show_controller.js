/*jslint indent: 2, nomen: true*/
/*global Marbles */
(function () {
  "use strict";

  Marbles.module("TrendsApp.Show", function (Show, Marbles, Backbone, Marionette, $, _) {
    Show.Controller = {
      showTrends: function () {
        Marbles.mainRegion.show(M.fn.getLayout(Show));
      }
    };
  });

}());
