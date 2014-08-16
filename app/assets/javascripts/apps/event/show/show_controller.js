(function () {
  'use strict';

  Marbles.module('EventApp.Show', function (Show, Marbles, Backbone, Marionette, $, _) {

    function onShow(layout) {
      //addViewsToLayout(layout);
      //listenToTriggers(layout);
      //M.fn.bindModel(layout);
    }

    Show.Controller = {
      showEvent: function (id, event) {
        event = event || Marbles.request('get:event', id);
        Marbles.execute('when:fetched', event, function () {
          Marbles.mainRegion.show(M.fn.getLayout(Show, onShow, event));
        });
      }
    };
  });

}());
