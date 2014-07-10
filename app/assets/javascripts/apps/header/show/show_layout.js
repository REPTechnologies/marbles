(function () {
  'use strict';

  Marbles.module('HeaderApp.Show', function (Show, Marbles, Backbone, Marionette, $, _) {
    Show.Layout = Marionette.LayoutView.extend({
      template: 'header/show/show',
      tagName: 'header',
      regions: {
        authRegion: '#auth-region'
      },
      events: {
        'click #header-find': function () {
          this.trigger('header:find');
        },
        'click #header-add': function () {
          this.trigger('header:add');
        },
        'click #header-trends': function () {
          this.trigger('header:trends');
        },
        'click .header-logo': function () {
          this.trigger('header:logo');
        }
      }
    });
  });

}());
