(function () {
  'use strict';

  Marbles.module('Entities', function (Entities, Marbles, Backbone, Marionette, $, _) {

    Entities.Event = Marbles.RelationalModel.extend({
      paramRoot: 'event',
      urlRoot: Routes.v1_events_path(),
      relations: [{
        type: Backbone.HasMany,
        key: 'scopes',
        relatedModel: 'Scope',
        collectionType: 'ScopeCollection',
        includeInJSON: 'id',
        keySource: 'scope_ids'
      }, {
        type: Backbone.HasOne,
        key: 'organization',
        relatedModel: 'Organization',
        keySource: 'organization_id',
        keyDestination: 'organization_attributes',
        reverseRelation: {
          key: 'events',
          relatedModel: 'Event',
          collectionType: 'EventCollection',
          keySource: 'event_ids',
          includeInJSON: false
        }
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
      model: Entities.Event,
      url: Routes.v1_events_path()
    });

    Marbles.respond.setHandler('get:event', function (id) {
      var event = Entities.Event.findOrCreate({id: id});
      event.fetch();
      return event;
    });

    Marbles.respond.setHandler('get:event:list', function () {
      var events = new Entities.EventCollection();
      events.fetch();
      return events;
    });

    Marbles.respond.setHandler('new:event', function () {
      return new Entities.Event();
    });

  });

}());
