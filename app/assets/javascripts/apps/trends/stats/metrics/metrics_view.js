(function () {
  'use strict';

  Marbles.module('TrendsApp.Stats.Metrics', function (Metrics, Marbles, Backbone, Marionette, $, _) {

    Metrics.View = Marionette.ItemView.extend({
      template: 'trends/stats/metrics/view',
      onShow: function onShowFn() {
        this.$el.find('.label').tooltip({
          placement: 'right'
        });
      },
      initialize: function initializeFn(options) {
        this.ndxPoll = options.ndxPoll;

      },
      onDestroy: function onDestroyFn() {
        
      }
    });

  });

}());
