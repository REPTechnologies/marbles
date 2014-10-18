(function () {
  'use strict';

  Marbles.module('TrendsApp.Summary', function (Summary, Marbles, Backbone, Marionette, $, _) {
    Summary.Controller = Marbles.Controller.extend({
      initialize: function initializeFn(options) {
        this.ndxPoll = options.ndxPoll;
        this.ndxEvent = options.ndxEvent;
        this.layout = this.getLayoutView();

        this.listenTo(this.layout, 'show', this.showTrending);

        this.show(this.layout);
      },
      getLayoutView: function getLayoutViewFn() {
        return new Summary.Layout({
          ndxPoll: this.ndxPoll,
          ndxEvent: this.ndxEvent
        });
      },
      showTrending: function showTrendingFn() {
        Marbles.execute('show:trends:summary:trending', this.layout.trendingUpRegion, this.ndxPoll, true);
        Marbles.execute('show:trends:summary:trending', this.layout.trendingDownRegion, this.ndxPoll, false);
      }
    });
  });

}());
