/*jslint indent: 2, nomen: true*/
/*global Marbles */
(function () {
  "use strict";

  Marbles.module('AddApp.New', function (New, Marbles, Backbone, Marionette, $, _) {
    New.Layout = Marionette.Layout.extend({
      template: 'add/new/new',
      regions: {
        focusRegion: '#focus-region'
      }
    });
  });

}());
