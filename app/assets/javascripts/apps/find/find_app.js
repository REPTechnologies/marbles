(function () {
  'use strict';
  
  Marbles.module('FindApp', function (FindApp, Marbles, Backbone, Marionette, $, _) {
    FindApp.Router = Marionette.AppRouter.extend({
      appRoutes: {
        find: 'findEvents'
      }
    });

    Marbles.vent.on('find:list', function () {
      M.fn.nav('find');
    });

    var demux = {
      findEvents: function () {
        return new FindApp.Find.Controller();
      }
    };

    Marbles.addInitializer(function () {
      FindApp.router = new FindApp.Router({controller: demux});
    });
  });

}());
