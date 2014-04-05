/*jslint indent: 2, nomen: true*/
/*global Marbles */
(function () {
  "use strict";

  Marbles.module('HeaderApp.Show', function (Show, Marbles, Backbone, Marionette, $, _) {

    function getHeaderLayout() {
      var layout = M.fn.getLayout(Show);
      layout.on('header:find', function () {
        Marbles.vent.trigger('find:list');
      });
      layout.on('header:add', function () {
        Marbles.vent.trigger('add:new');
      });
      layout.on('header:trends', function () {
        Marbles.vent.trigger('trends:show');
      });
      layout.on('header:logo', function () {
        Marbles.vent.trigger('welcome:show');
      });
      return layout;
    }

    Show.Controller = {
      showHeader: function () {
        var headerLayout = getHeaderLayout();
        Marbles.headerRegion.show(headerLayout);
        return headerLayout;
      }
    };
  });
  
}());
