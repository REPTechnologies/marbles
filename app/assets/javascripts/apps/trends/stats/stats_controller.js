(function () {
  'use strict';

  Marbles.module('TrendsApp.Stats', function (Stats, Marbles, Backbone, Marionette, $, _) {
    Stats.Controller = Marbles.Controller.extend({
      initialize: function initializeFn(options) {
        this.ndxPoll = options.ndxPoll;
        this.layout = this.getLayoutView();

        this.listenTo(this.layout, 'show', this.showStats);

        this.show(this.layout);
      },
      getLayoutView: function getLayoutViewFn() {
        return new Stats.Layout({
          ndxPoll: this.ndxPoll
        });
      },
      showStats: function showStatsFn() {
        Marbles.execute('show:trends:stats:metrics', this.layout.metricsRegion, this.ndxPoll);
      }
    });
  });

}());
