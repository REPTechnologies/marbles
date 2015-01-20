(function () {
  'use strict';
  
  Marbles.module('FooterApp.Show', function (Show, Marbles, Backbone, Marionette, $, _) {
    Show.Controller = Marbles.Controller.extend({
      initialize: function initializeFn() {
        this.view = this.getView();

        this.listenTo(Marbles.mainRegion, 'show', function () {
          this.listenForNavigation();
          setFooterPosition();
        });

        this.show(this.view);
      },
      getView: function getViewFn() {
        return new Show.View();
      },
      listenForNavigation: function listenForNavigationFn() {
        this.listenTo(this.view, 'footer:mission', function () {
          Marbles.vent.trigger('mission:show');
        });
        this.listenTo(this.view, 'footer:help', function () {
          Marbles.vent.trigger('help:show');
        });
        this.listenTo(this.view, 'footer:contact', function () {
          Marbles.vent.trigger('contact:show');
        });
      }
    });
  });

}());
