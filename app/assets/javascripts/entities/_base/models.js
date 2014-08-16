(function () {
  'use strict';

  Marbles.module('Entities', function (Entities, Marbles, Backbone, Marionette, $, _) {

    Backbone.Relational.store.addModelScope(Entities);

    Marbles.commands.setHandler('when:fetched', function (entities, callback) {
      var promises = _.chain([entities]).flatten().pluck('_fetch').value();
      $.when(promises).done(callback);
    });

  });

}());
