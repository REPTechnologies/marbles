/*jslint indent: 2, nomen: true*/
/*global Marbles */
(function () {
  "use strict";

  Marbles.module("EventApp", function (EventApp, Marbles, Backbone, Marionette, $, _) {
    EventApp.Router = Marionette.AppRouter.extend({
      appRoutes: {
        'event/:id': 'showEvent'
      }
    });

    Marbles.vent.on('event:show', function (model) {
      M.fn.nav('event/' + model.id);
      EventApp.Show.Controller.showEvent(model.id, model);
    });

    Marbles.addInitializer(function () {
      new EventApp.Router({
        controller: EventApp.Show.Controller
      });
    });
  });

}());
