(function () {
  'use strict';

  Marbles.module('TrendsApp.Summary.Trending', function (Trending, Marbles, Backbone, Marionette, $, _) {
    Trending.Controller = Marbles.Controller.extend({
      initialize: function initializeFn(options) {
        this.layout = this.getView(options.ndxPoll, options.up);
        this.show(this.layout);
      },
      getView: function getViewFn(ndxPoll, up) {
        return new Trending.List({
          ndxPoll: ndxPoll,
          up: up
        });
      }
    });
  });

}());
