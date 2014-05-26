/*jslint indent: 2, nomen: true*/
/*global Marbles */
(function () {
  "use strict";

  Marbles.module('Entities', function (Entities, Marbles, Backbone, Marionette, $, _) {

    Entities.Scope = Entities.Model.extend({});

    Entities.ScopeCollection = Backbone.Collection.extend({
      model: Entities.Scope
    });

    var API = {
      setScopes: function (scopes) {
        return new Entities.ScopeCollection(scopes || {});
      }
    };

    Marbles.respond.setHandler('set:scope:list', function (scopes) {
      return API.setScopes(scopes);
    });

  });

}());
