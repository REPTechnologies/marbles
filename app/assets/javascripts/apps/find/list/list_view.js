/*jslint indent: 2, nomen: true*/
/*global Marbles */
(function () {
  "use strict";

  Marbles.module("FindApp.List", function (List, Marbles, Backbone, Marionette, $, _) {
    List.View = Marionette.ItemView.extend({
      template: "find/list/list"
    });
  });

}());
