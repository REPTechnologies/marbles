(function () {
  'use strict';

  Marbles.module('FindApp.Find', function (Find, Marbles, Backbone, Marionette, $, _) {
    Find.Layout = Marionette.LayoutView.extend({
      template: 'find/list/list',
      regions: {
        eventListRegion: '#event-list-region'
      }
    });
  });

}());
