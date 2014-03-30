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
      headerView.on('header:trends', function () {
        Marbles.vent.trigger('trends:show');
      });
      headerView.on('header:logo', function () {
        Marbles.vent.trigger('welcome:show');
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
