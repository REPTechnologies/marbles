(function () {
  'use strict';

  Marbles.module('TrendsApp.Summary.Recommended', function (Recommended, Marbles, Backbone, Marionette, $, _) {

    Recommended.View = Marionette.ItemView.extend({
      template: 'trends/summary/recommended/view',
      tagName: 'li',
      className: 'list-group-item'
    });

    Recommended.List = Marionette.CompositeView.extend({
      template: 'trends/summary/recommended/list',
      childView: Recommended.View,
      childViewContainer: 'ol',
      initialize: function initializeFn(options) {
        this.ndxPoll = options.ndxPoll;

        this.focusDim = this.ndxPoll.dimension(_.property('focus'));
        this.scoreByFocus = this.focusDim.group()
          .reduce.apply(null, this.getReducers())
          .order(this.getOrderValue);
        this.recommended = this.scoreByFocus.top(2);
        var all = this.scoreByFocus.all();

        this.collection = new Backbone.Collection(this.recommended);
      },
      onDestroy: function onDestroyFn() {
        this.focusDim.dispose();
        this.scoreByFocus.dispose();
      },
      getOrderValue: function getOrderValueFn(p) {
        return 100 - p;
      },
      getReducers: function getReducersFn() {
        var date = null;
        return [
          function addFn(p, v) {
            if (date <= v.dd) {
              date = v.dd;
              p.score = v.score;
              p.description = v.description;
            }
            return p;
          }, function removeFn(p, v) {
            return p;
          }, function initFn() {
            return {score: 0, description: ''};
          }
        ];
      }
    });

  });

}());
