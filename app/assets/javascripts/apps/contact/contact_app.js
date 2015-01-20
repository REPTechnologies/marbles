(function () {
  'use strict';

  Marbles.module('ContactApp', function (ContactApp, Marbles, Backbone, Marionette, $, _) {
    ContactApp.Router = Marionette.AppRouter.extend({
      appRoutes: {
        'contact': 'showContact'
      }
    });

    Marbles.vent.on('contact:show', function () {
      M.fn.nav('contact');
    });

    var demux = {
      showContact: function () {
        return new ContactApp.Show.Controller();
      }
    };

    Marbles.addInitializer(function () {
      ContactApp.router = new ContactApp.Router({controller: demux});
    });
  });

}());
