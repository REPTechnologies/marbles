/*jslint indent: 2, nomen: true*/
/*global Marbles */
(function () {
  "use strict";

  Marbles.module('AddApp.New.Info', function (Info, Marbles, Backbone, Marionette, $, _) {
    Info.View = Marionette.ItemView.extend({
      template: 'add/new/info'
    });
  });

}());