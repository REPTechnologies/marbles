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
        M.fn.getModel(Marbles.Entities.Event, id, event).done(function (event) {
          Marbles.mainRegion.show(M.fn.getLayout(Show, onShow, event));
        });
      }
    };
  });

}());
