(function () {
  'use strict';

  Marbles.module('Entities', function (Entities, Marbles, Backbone, Marionette, $, _) {

    Entities.Scope = Marbles.RelationalModel.extend({});

    Entities.ScopeCollection = Backbone.Collection.extend({
      model: Entities.Scope
    });

    var scopes = [];

    Marbles.commands.setHandler('set:scope:list', function (scopesData) {
      scopes = new Entities.ScopeCollection(scopesData || {});
    });

    Marbles.respond.setHandler('get:scope:list', function () {
      return scopes;
    });

  });

}());
