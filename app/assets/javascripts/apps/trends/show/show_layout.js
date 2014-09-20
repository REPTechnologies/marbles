(function () {
  'use strict';

  Marbles.module('TrendsApp.Show', function (Show, Marbles, Backbone, Marionette, $, _) {
    Show.Layout = Marionette.LayoutView.extend({
      template: 'trends/show/show',
      regions: {
        fociLineRegion: '#foci-line-region',
        tabContentRegion: '#tab-content-region'
      }
    });
  });

}());
