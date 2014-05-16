/*jslint indent: 2, nomen: true*/
/*global Marbles */
(function () {
  "use strict";

  Marbles.module('EventApp.Show', function (Show, Marbles, Backbone, Marionette, $, _) {

    function onShow(layout) {
      //addViewsToLayout(layout);
      //listenToTriggers(layout);
      //M.fn.bindModel(layout);
    }

    function getEvent(id, event) {
      var deferred = $.Deferred();
      if (!event) {
        event = new Marbles.Entities.Event({id: id});
        deferred = event.fetch({
          success: function (event, response, options) {
            deferred.resolve(event);
          }
        });
      } else {
        deferred.resolve(event);
      }
      return deferred.promise();
    }

    Show.Controller = {
      showEvent: function (id, event) {
        getEvent(id, event).done(function (event) {
          Marbles.mainRegion.show(M.fn.getLayout(Show, onShow, event));
        });
      }
    };
  });

}());