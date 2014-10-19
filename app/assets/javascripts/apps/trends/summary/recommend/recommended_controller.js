(function () {
  'use strict';

  Marbles.module('TrendsApp.Summary.Recommended', function (Recommended, Marbles, Backbone, Marionette, $, _) {
    Recommended.Controller = Marbles.Controller.extend({
      initialize: function initializeFn(options) {
        this.layout = this.getView(options.ndxPoll);
        this.show(this.layout);
      },
      getView: function getViewFn(ndxPoll) {
        return new Recommended.List({
          ndxPoll: ndxPoll
        });
      }
    });
  });

}());
