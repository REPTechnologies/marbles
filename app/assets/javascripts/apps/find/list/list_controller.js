/*jslint indent: 2, nomen: true*/
/*global Marbles */
(function () {
  "use strict";

  Marbles.module("FindApp.List", function (List, Marbles, Backbone, Marionette, $, _) {

    function getListView() {
      return new List.View();
    }

    List.Controller = {
      showList: function () {
        Marbles.mainRegion.show(getListView());
      }
    };
  });

}());
