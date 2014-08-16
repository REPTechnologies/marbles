(function () {
  'use strict';

  Marbles.module('HeaderApp.Show', function (Show, Marbles, Backbone, Marionette, $, _) {
    Show.Layout = Marionette.LayoutView.extend({
      template: 'header/show/show',
      tagName: 'header',
      regions: {
        authRegion: Marbles.Region.extend({el: '#auth-region'})
      },
      triggers: {
        'click #header-find': 'header:find',
        'click #header-add': 'header:add',
        'click #header-trends': 'header:trends',
        'click .header-logo': 'header:logo'
      }
    });
  });

}());
