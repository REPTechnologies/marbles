/*jslint indent: 2, nomen: true*/
/*global Marbles, Routes */
(function () {
  "use strict";

  Marbles.module("Entities", function (Entities, Marbles, Backbone, Marionette, $, _) {

    Entities.Event = Entities.Model.extend({
      jsonNamespace: 'event',
      urlRoot: Routes.v1_events_path(),
      validate: function (attributes, options) {
        return;
      }
    });

    Entities.EventsCollection = Backbone.Collection.extend({});

  });

}());
