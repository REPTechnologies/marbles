(function () {
  'use strict';

  Marbles.module('TrendsApp.Stats.Metrics', function (Metrics, Marbles, Backbone, Marionette, $, _) {

    Metrics.View = Marionette.ItemView.extend({
      template: 'trends/stats/metrics/view',
      initialize: function initializeFn(options) {
        this.ndxPoll = options.ndxPoll;
        this.countAll = this.ndxPoll.groupAll().reduceCount();
      },
      onShow: function onShowFn() {
        this.displayValues();
        this.$el.find('.label[data-toggle]').tooltip({
          placement: 'right'
        });
      },
      onDestroy: function onDestroyFn() {
        this.countAll.dispose();
      },
      displayValues: function displayValuesFn() {
        this.pollCountDisplay = dc.numberDisplay('#poll-count-display').options({
          group: this.countAll,
          valueAccessor: function (d) {
            return d / 6;
          },
          formatNumber: function (d) {
            return Math.round(d);
          }
        });
      }
    });

  });

}());
