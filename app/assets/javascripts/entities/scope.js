(function () {
  'use strict';

  Marbles.module('Entities', function (Entities, Marbles, Backbone, Marionette, $, _) {

    Entities.Scope = Backbone.RelationalModel.extend({});

    Entities.ScopeCollection = Backbone.Collection.extend({
      model: Entities.Scope
    });

    Marbles.respond.setHandler('set:scope:list', function (scopes) {
      return new Entities.ScopeCollection(scopes || {});
    });

  });

}());
