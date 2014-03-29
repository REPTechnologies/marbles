/*jslint indent: 2, nomen: true*/
/*global Marbles */
(function () {
  "use strict";

  Marbles.module("AddApp", function (AddApp, Marbles, Backbone, Marionette, $, _) {
    AddApp.Router = Marionette.AppRouter.extend({
      appRoutes: {
        add: 'showNew'
      }
    });

    var API = {
      showNew: function () {
        AddApp.New.Controller.showNew();
      }
    };
    
    Marbles.vent.on('add:new', function () {
      M.fn.nav('add');
      API.showNew();
    });

    Marbles.addInitializer(function () {
      new AddApp.Router({
        controller: API
      });
    });
  });

}());