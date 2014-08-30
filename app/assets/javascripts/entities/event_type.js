/*jslint indent: 2, nomen: true*/
/*global Marbles */
(function () {
  "use strict";

  Marbles.module('Entities', function (Entities, Marbles, Backbone, Marionette, $, _) {

    Entities.EventType = Backbone.Model.extend({});

    Entities.EventTypeCollection = Backbone.Collection.extend({
      model: Entities.EventType
    });

    var eventTypes = [];

    Marbles.commands.setHandler('set:event:type:list', function (eventTypesData) {
      eventTypes = new Entities.EventTypeCollection(eventTypesData || {});
    });

    Marbles.respond.setHandler('get:event:type:list', function () {
      return eventTypes;
    });

  });

}());