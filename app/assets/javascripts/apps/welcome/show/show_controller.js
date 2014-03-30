/*jslint indent: 2, nomen: true*/
/*global Marbles */
(function () {
  "use strict";

  Marbles.module("WelcomeApp.Show", function (Show, Marbles, Backbone, Marionette, $, _) {
    Show.Controller = {
      showWelcome: function () {
        Marbles.mainRegion.show(M.fn.getLayout(Show));
      }
    };
  });

}());
