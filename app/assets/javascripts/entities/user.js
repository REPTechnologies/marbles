(function () {
  'use strict';

  Marbles.module('Entities', function (Entities, Marbles, Backbone, Marionette, $, _) {

    Entities.User = Backbone.Model.extend({});

    Entities.UserCollection = Backbone.Collection.extend({
      model: Entities.User
    });

    var currentUser = {};

    Marbles.commands.setHandler('set:current:user', function (userData) {
      currentUser = new Entities.User(userData || {});
    });

    Marbles.respond.setHandler('get:current:user', function () {
      return currentUser;
    });

    Marbles.commands.setHandler('destroy:current:user', function () {
      currentUser.clear();
    });

    Marbles.respond.setHandler('update:current:user', function (userData) {
      $('meta[name="csrf-token"]').attr('content', userData.csrf_token);
      currentUser.set(userData);
    });

    Marbles.respond.setHandler('get:current:user:join:date', function () {
      return currentUser.get('created_at');
    });

  });

}());
