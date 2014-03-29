/*jslint indent: 2, nomen: true*/
/*global Marbles */
(function () {
  "use strict";

  Marbles.module("AddApp.New", function (New, Marbles, Backbone, Marionette, $, _) {
    New.View = Marionette.ItemView.extend({
      template: "add/new/new"
    });
  });

}());
