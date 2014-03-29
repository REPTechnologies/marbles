/*jslint indent: 2, nomen: true*/
/*global Marbles */
(function () {
  "use strict";

  Marbles.module("AddApp.New", function (New, Marbles, Backbone, Marionette, $, _) {

    function getNewView() {
      return new New.View();
    }

    New.Controller = {
      showNew: function () {
        Marbles.mainRegion.show(getNewView());
      }
    };
  });

}());
