(function () {
  'use strict';

  Marbles.module('WelcomeApp.Show', function (Show, Marbles, Backbone, Marionette, $, _) {
    Show.Controller = Marbles.Controller.extend({
      initialize: function initializeFn() {
        this.layout = this.getLayoutView();
        this.show(this.layout);
      },
      getLayoutView: function getLayoutViewFn() {
        return new Show.Layout();
      }
    });
  });

}());
