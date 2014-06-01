/*jslint indent: 2, nomen: true*/
/*global Marbles */
(function () {
  "use strict";

  Marbles.module("FindApp.List", function (List, Marbles, Backbone, Marionette, $, _) {
    List.Layout = Marionette.Layout.extend({
      template: 'find/list/list',
      regions: {
        eventListRegion: '#event-list-region'
      }
    });
  });

}());
