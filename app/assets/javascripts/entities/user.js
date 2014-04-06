/*jslint indent: 2, nomen: true*/
/*global Marbles */
(function () {
  "use strict";

  Marbles.module("Entities", function (Entities, Marbles, Backbone, Marionette, $, _) {

    Entities.User = Backbone.Model.extend({});

    Entities.UserCollection = Backbone.Collection.extend({
      model: Entities.User
    });

    var API = {
      setCurrentUser: function (currentUser) {
        return new Entities.User(currentUser);
      }
    };

    Marbles.respond.setHandler('set:current:user', function (currentUser) {
      return API.setCurrentUser(currentUser);
    });

  });

}());