(function () {
  'use strict';

  Marbles.module('TrendsApp.Summary.Trending', function (Trending, Marbles, Backbone, Marionette, $, _) {

    Trending.View = Marionette.ItemView.extend({
      template: 'trends/summary/trending/view',
      tagName: 'li',
      className: 'list-group-item'
    });

    Trending.List = Marionette.CompositeView.extend({
      template: 'trends/summary/trending/list',
      childView: Trending.View,
      childViewContainer: 'ol',
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

        this.collection = new Marbles.Entities.TrendCollection(this.trends);
      },
      onDestroy: function onDestroyFn() {
        this.focusDim.dispose();
        this.scoreChangeByFocus.dispose();
      }
    });

  });

}());
