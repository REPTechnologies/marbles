/*jslint indent: 2, nomen: true*/
/*global Marbles */
(function () {
  "use strict";

  Marbles.module('AddApp.New.Details', function (Details, Marbles, Backbone, Marionette, $, _) {
    Details.View = Marionette.ItemView.extend({
      template: 'add/new/details'
    });
  });

}());