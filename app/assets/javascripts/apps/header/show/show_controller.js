(function () {
  'use strict';

  Marbles.module('HeaderApp.Show', function (Show, Marbles, Backbone, Marionette, $, _) {

    Show.Controller = Marbles.Controller.extend({
      initialize: function () {
        this.layout = this.getLayoutView();

        this.listenTo(this.layout, 'show', function () {
          this.listenForNavigation();
          this.startAuth();
        });

        this.show(this.layout);
      },
      getLayoutView: function getLayoutViewFn() {
        return new Show.Layout();
      },
      startAuth: function startAuthFn() {
        Marbles.execute('start:auth', this.layout);
      },
      listenForNavigation: function listenForNavigationFn() {
        this.listenTo(this.layout, 'header:find', function () {
          Marbles.vent.trigger('find:list');
        });
        this.listenTo(this.layout, 'header:add', function () {
          Marbles.vent.trigger('add:new');
        });
        this.listenTo(this.layout, 'header:trends', function () {
          Marbles.vent.trigger('trends:show');
        });
        this.listenTo(this.layout, 'header:logo', function () {
          Marbles.vent.trigger('welcome:show');
        });
        this.listenTo(this.layout, 'header:poll', function () {
          Marbles.vent.trigger('poll:show');
        });
      }
    });
  });
  
}());
