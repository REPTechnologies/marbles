(function () {
  'use strict';

  Marbles.module('TrendsApp.Recent', function (Recent, Marbles, Backbone, Marionette, $, _) {
    Recent.Controller = Marbles.Controller.extend({
      initialize: function initializeFn(options) {
        this.layout = this.getView(options.ndxPoll);
        this.show(this.layout);
      },
      getView: function getViewFn(ndxPoll) {
        return new Recent.List({
          ndxPoll: ndxPoll
        });
      }
    });
  });

}());
