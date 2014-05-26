/*jslint indent: 2, nomen: true*/
/*global Marbles, Routes */
(function () {
  "use strict";

  Marbles.module("Entities", function (Entities, Marbles, Backbone, Marionette, $, _) {

    Entities.Event = Entities.Model.extend({
      paramRoot: 'event',
      urlRoot: Routes.v1_events_path(),
      relations: [{
        type: Backbone.HasMany,
        key: 'scopes',
        relatedModel: 'Scope',
        collectionType: 'ScopeCollection',
        includeInJSON: 'id'
      }],
      validate: function (attributes, options) {
        return;
      }
    });

    Entities.EventCollection = Backbone.Collection.extend({
      model: Entities.Event
    });

  });

}());
