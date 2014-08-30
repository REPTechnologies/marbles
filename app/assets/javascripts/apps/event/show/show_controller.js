(function () {
  'use strict';

  Marbles.module('EventApp.Show', function (Show, Marbles, Backbone, Marionette, $, _) {

    Show.Controller = Marbles.Controller.extend({
      initialize: function initalizeFn(options) {
        var id = options.id;
        var event = options.event || Marbles.request('get:event', id);

        this.layout = this.getLayoutView(event);
        this.show(this.layout, {loading: true});
      },
      getLayoutView: function getLayoutViewFn(event) {
        return new Show.Layout({model: event});
      }
    });

  });

}());
