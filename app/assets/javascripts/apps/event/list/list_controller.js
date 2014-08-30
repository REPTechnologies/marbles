(function () {
  'use strict';

  Marbles.module('EventApp.List', function (List, Marbles, Backbone, Marionette, $, _) {

    List.Controller = Marbles.Controller.extend({
      initialize: function initalizeFn(options) {
        var events = options.events || Marbles.request('get:event:list');

        this.layout = this.getListView(events);
        this.show(this.layout, {loading: true});
      },
      getListView: function getListViewFn(events) {
        return new List.View({collection: events});
      }
    });

  });

}());
