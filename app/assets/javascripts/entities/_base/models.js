(function () {
  'use strict';

  Marbles.module('Entities', function (Entities, Marbles, Backbone, Marionette, $, _) {

    Backbone.Relational.store.addModelScope(Entities);

  });

}());