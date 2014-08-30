(function () {
  'use strict';

  Marbles.module('FindApp.Find', function (Find, Marbles, Backbone, Marionette, $, _) {

    function getEventList() {
      var events = Marbles.request('get:event:list');
      return Marbles.request('event:list:view', events);
    }

    function addViewsToLayout(layout) {
      layout.eventListRegion.show(getEventList());
    }

    Find.Controller = Marbles.Controller.extend({
      initialize: function initializeFn() {
        this.layout = this.getLayoutView();
        this.listenTo(this.layout, 'show', function () {
          addViewsToLayout(this.layout);
        });

        this.show(this.layout);
      },
      getLayoutView: function getLayoutViewFn() {
        return new Find.Layout();
      }
    });
  });

}());
