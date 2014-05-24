/*jslint indent: 2, nomen: true*/
/*global Marbles */
(function () {
  "use strict";

  Marbles.module('Entities', function (Entities, Marbles, Backbone, Marionette, $, _) {

    Entities.EventType = Backbone.Model.extend({});

    Entities.EventTypeCollection = Backbone.Collection.extend({
      model: Entities.EventType
    });

    var API = {
      setEventTypes: function (eventTypes) {
        return new Entities.EventTypeCollection(eventTypes || {});
      }
    };

    Marbles.respond.setHandler('set:event:type:list', function (eventTypes) {
      return API.setEventTypes(eventTypes);
    });

  });

}());