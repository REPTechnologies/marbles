(function () {
  'use strict';

  Marbles.module('TrendsApp.Activity', function (Activity, Marbles, Backbone, Marionette, $, _) {
    Activity.Layout = Marionette.LayoutView.extend({
      template: 'trends/activity/show',
      regions: {
        
      },
      initialize: function initializeFn(options) {
        this.ndxPoll = options.ndxPoll;
        this.ndxEvent = options.ndxEvent;
      },
      onShow: function onShowFn() {
        
      },
      onDestroy: function onDestroyFn() {
        
      }
    });
  });

}());
