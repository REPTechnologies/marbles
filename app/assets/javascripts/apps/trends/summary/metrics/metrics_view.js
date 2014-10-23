(function () {
  'use strict';

  Marbles.module('TrendsApp.Summary.Metrics', function (Metrics, Marbles, Backbone, Marionette, $, _) {

    Metrics.View = Marionette.ItemView.extend({
      template: 'trends/summary/metrics/view',
      onShow: function onShowFn() {
        this.$el.find('.label').tooltip({
          placement: 'right'
        });
      }
    });

  });

}());
