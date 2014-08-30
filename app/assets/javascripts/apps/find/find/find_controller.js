(function () {
  'use strict';

  Marbles.module('FindApp.Find', function (Find, Marbles, Backbone, Marionette, $, _) {

    function showEventList(layout) {
      Marbles.execute('show:event:list', layout.eventListRegion);
    }

    Find.Controller = Marbles.Controller.extend({
      initialize: function initializeFn() {
        this.layout = this.getLayoutView();
        this.listenTo(this.layout, 'show', function () {
          showEventList(this.layout);
        });

        this.show(this.layout);
      },
      getLayoutView: function getLayoutViewFn() {
        return new Find.Layout();
      }
    });
  });

}());
