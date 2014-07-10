/*jslint indent: 2, nomen: true*/
/*global Marbles */
(function () {
  "use strict";

Marbles.module("WelcomeApp.Show", function (Show, Marbles, Backbone, Marionette, $, _) {
  Show.Layout = Marionette.LayoutView.extend({
    template: "welcome/show/show"
  });
});

}());
