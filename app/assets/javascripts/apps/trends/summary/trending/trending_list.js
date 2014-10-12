(function () {
  'use strict';

  Marbles.module('TrendsApp.Summary.Trending', function (Trending, Marbles, Backbone, Marionette, $, _) {
    Trending.List = Marionette.ItemView.extend({
      template: 'trends/summary/trending/list',
      initialize: function initializeFn(options) {
        this.ndxPoll = options.ndxPoll;
        this.up = options.up;

        this.focusDim = this.ndxPoll.dimension(_.property('focus'));
        this.scoreChangeByFocus = this.focusDim.group().reduceSum(_.property('weightedChange'));
        this.trends = this.scoreChangeByFocus.top(Infinity);

        var sortByValue = crossfilter.quicksort.by(_.property('value'));
        sortByValue(this.trends, 0, this.trends.length);

        var bisectByValue = crossfilter.bisect.by(_.property('value'));
        var mid = bisectByValue(this.trends, 0, 0, this.trends.length);

        this.trends = this.trends.slice(this.up ? mid : 0, this.up ? this.trends.length : mid);
        if (this.up) {
          this.trends = this.trends.reverse(); 
        }

        console.dir(this.trends);
      },
      onShow: function onShowFn() {
        
      },
      onDestroy: function onDestroyFn() {
        this.focusDim.dispose();
      }
    });
  });

}());
