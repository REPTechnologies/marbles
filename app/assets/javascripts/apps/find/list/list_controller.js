/*jslint indent: 2, nomen: true*/
/*global Marbles, M */
(function () {
  "use strict";

  Marbles.module("FindApp.List", function (List, Marbles, Backbone, Marionette, $, _) {

    function getEventList() {
      return new List.Event.List({
        collection: Marbles.request('get:event:list')
      });
    }

    function addViewsToLayout(layout) {
      layout.eventListRegion.show(getEventList());
    }

    function listenToTriggers(layout) {
      
    }

    function onShow(layout) {
      addViewsToLayout(layout);
      listenToTriggers(layout);
    }

    List.Controller = {
      showList: function () {
        Marbles.mainRegion.show(M.fn.getLayout(List, onShow));
      }
    };
  });

}());
