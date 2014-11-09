(function () {
  'use strict';

  Marbles.module('TrendsApp.Activity', function (Activity, Marbles, Backbone, Marionette, $, _) {
    Activity.Controller = Marbles.Controller.extend({
      initialize: function initializeFn(options) {
        this.ndxPoll = options.ndxPoll;
        this.ndxEvent = options.ndxEvent;
        this.layout = this.getLayoutView();

        this.show(this.layout);
      },
      getLayoutView: function getLayoutViewFn() {
        return new Activity.Layout({
          ndxPoll: this.ndxPoll,
          ndxEvent: this.ndxEvent
        });
      }
    });
  });

}());
