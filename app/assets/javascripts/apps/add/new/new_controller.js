/*jslint indent: 2, nomen: true*/
/*global Marbles */
(function () {
  "use strict";

  Marbles.module('AddApp.New', function (New, Marbles, Backbone, Marionette, $, _) {

    function getFocusPicker() {
      return new New.Focus.Picker();
    }

    function addViewsToLayout() {
      this.focusRegion.show(getFocusPicker());
    }

    New.Controller = {
      showNew: function () {
        Marbles.mainRegion.show(M.fn.getLayout(New, addViewsToLayout));
      }
    };
  });

}());
