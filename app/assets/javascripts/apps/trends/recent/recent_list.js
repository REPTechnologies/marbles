(function () {
  'use strict';

  Marbles.module('TrendsApp.Recent', function (Recent, Marbles, Backbone, Marionette, $, _) {

    Recent.View = Marionette.ItemView.extend({
      template: 'trends/recent/view',
      tagName: 'li',
      className: 'list-group-item'
    });

    Recent.List = Marionette.CompositeView.extend({
      template: 'trends/recent/list',
      childView: Recent.View,
      childViewContainer: 'ol',
      initialize: function initializeFn(options) {
        this.ndxPoll = options.ndxPoll;

        this.focusDim = this.ndxPoll.dimension(_.property('focus'));
        this.scoreByFocus = this.focusDim.group()
          .reduce.apply(null, this.getReducers())
          .order(this.getOrderValue);
        this.recent = this.scoreByFocus.top(Infinity);

        this.collection = new Backbone.Collection(this.recent);
      },
      onDestroy: function onDestroyFn() {
        this.focusDim.dispose();
        this.scoreByFocus.dispose();
      },
      getOrderValue: function getOrderValueFn(p) {
        return p.score;
      },
      getReducers: function getReducersFn() {
        var date = null;
        return [
          function addFn(p, v) {
            if (date <= v.dd) {
              date = v.dd;
              p.score = v.score;
              p.color = v.color;
            }
            return p;
          }, function removeFn(p, v) {
            return p;
          }, function initFn() {
            return {};
          }
        ];
      }
    });

  });

}());
