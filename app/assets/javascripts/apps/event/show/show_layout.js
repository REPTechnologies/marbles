(function () {
  'use strict';

  Marbles.module('EventApp.Show', function (Show, Marbles, Backbone, Marionette, $, _) {
    Show.Layout = Marionette.LayoutView.extend({
      template: 'event/show/show',
      className: 'event',
      templateHelpers: function () {return Marbles.EventApp.TemplateHelpers;},
      regions: {
      },
      events: {
        'click .organization-name': function () {
          Marbles.vent.trigger('organization:show', this.model.get('organization'));
        }
      }
    });
  });

}());
