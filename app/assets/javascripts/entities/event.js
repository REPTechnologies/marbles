/*jslint indent: 2, nomen: true*/
/*global Marbles, Routes, M, gon */
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
        includeInJSON: 'id',
        keySource: 'scope_ids'
      }],
      validate: function eventValidatorFn(attrs, options) {
        var errors = [];

        M.validates.presence(errors, attrs, 'title', 'location', 'description', 'primary_focus_id',
          {key: 'held_at', alias: 'Time'}, {key: 'held_on', alias: 'Date'},  {key: 'event_type', alias: 'What is it?'});

        M.validates.numericality(errors, attrs, 'cost', {key: 'seats', only_integer: true});

        M.validates.inclusion(errors, attrs, {key: 'event_type', alias: 'What is it?', 'in': _.pluck(gon.event_types, 'name'),
          message: 'is not a valid event type'});

        if (errors.length > 0) {
          return errors;
        }
      }
    });

    Entities.EventCollection = Backbone.Collection.extend({
      model: Entities.Event
    });

  });

}());
