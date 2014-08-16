(function () {
  'use strict';

  Marbles.module('AddApp.New', function (New, Marbles, Backbone, Marionette, $, _) {
    New.Layout = Marionette.LayoutView.extend({
      template: 'add/new/new',
      regions: {
        focusRegion: '#focus-region',
        eventTypeRegion: '#event-type-region',
        eventScopeRegion: '#event-scope-region',
        eventInfoRegion: '#event-info-region',
        eventDetailsRegion: '#event-details-region',
        eventPictureRegion: '#event-picture-region'
      },
      triggers: {
        'click #submit': 'event:submit'
      }
    });
  });

}());
