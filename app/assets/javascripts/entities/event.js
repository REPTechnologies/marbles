/*jslint indent: 2, nomen: true*/
/*global Marbles */
(function () {
  "use strict";

  Marbles.module("Entities", function (Entities, Marbles, Backbone, Marionette, $, _) {

    Entities.Event = Backbone.Model.extend({
      urlRoot: Routes.v1_events_path(),
      validate: function (attributes, options) {
        return 'not implemented';
      }
    });

    Entities.EventsCollection = Backbone.Collection.extend({});

  });

}());
