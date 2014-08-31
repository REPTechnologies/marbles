(function () {
  'use strict';
  
  Marbles.module('FooterApp.Show', function (Show, Marbles, Backbone, Marionette, $, _) {
    Show.Controller = Marbles.Controller.extend({
      initialize: function initializeFn() {
        this.view = this.getView();

        this.listenTo(Marbles.mainRegion, 'show', setFooterPosition);

        this.show(this.view);
      },
      getView: function getViewFn() {
        return new Show.View();
      }
    });
  });

}());
