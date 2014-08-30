(function () {
  'use strict';

  Marbles.module('AddApp', function (AddApp, Marbles, Backbone, Marionette, $, _) {
    AddApp.Router = Marionette.AppRouter.extend({
      appRoutes: {
        add: 'newEvent'
      }
    });

    Marbles.vent.on('add:new', function () {
      M.fn.nav('add');
    });

    var demux = {
      newEvent: function () {
        return new AddApp.New.Controller();
      }
    };

    Marbles.addInitializer(function () {
      AddApp.router = new AddApp.Router({controller: demux});
    });
  });

}());
