/*jslint indent: 2, nomen: true*/
/*global Marbles */
(function () {
  "use strict";

  Marbles.module('HeaderApp.Show', function (Show, Marbles, Backbone, Marionette, $, _) {

    function getHeaderView() {
      var headerView = new Show.View();
      headerView.on('header:find', function () {
        Marbles.vent.trigger('find:list');
      });
      headerView.on('header:add', function () {
        Marbles.vent.trigger('add:new');
      });
      headerView.on('header:track', function () {
        Marbles.vent.trigger('track:show');
      });
      return headerView;
    }

    Show.Controller = {
      showHeader: function () {
        Marbles.headerRegion.show(getHeaderView());
      },
      
    };
  });
  
}());
