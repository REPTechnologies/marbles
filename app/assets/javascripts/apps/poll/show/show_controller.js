(function () {
  'use strict';

  Marbles.module('PollApp.Show', function (Show, Marbles, Backbone, Marionette, $, _) {
    Show.Controller = Marbles.Controller.extend({
      initialize: function initializeFn() {
        var poll = Marbles.request('get:active:poll');
        poll.get('questions').at(0).set('active', true);

        this.layout = this.getLayoutView(poll);
        this.show(this.layout);
      },
      getLayoutView: function getLayoutViewFn(poll) {
        return new Show.Layout({model: poll});
      }
    });
  });

}());
