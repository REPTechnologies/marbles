(function () {
  'use strict';

  Marbles.module('Entities', function (Entities, Marbles, Backbone, Marionette, $, _) {

    Entities.User = Backbone.Model.extend({});

    Entities.UserCollection = Backbone.Collection.extend({
      model: Entities.User
    });

    function setCurrentUser(currentUser) {
      return new Entities.User(currentUser || {});
    }

    Marbles.respond.setHandler('set:current:user', function (currentUser) {
      return setCurrentUser(currentUser);
    });

  });

}());
