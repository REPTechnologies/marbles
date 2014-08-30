/*jslint indent: 2, nomen: true*/
/*global Marbles */
(function () {
  "use strict";

  Marbles.module('Entities', function (Entities, Marbles, Backbone, Marionette, $, _) {

    Entities.Focus = Backbone.Model.extend({});

    Entities.FocusCollection = Backbone.Collection.extend({
      model: Entities.Focus
    });

    var foci = [];

    Marbles.commands.setHandler('set:focus:list', function (fociData) {
      foci = new Entities.FocusCollection(fociData || {});
    });

    Marbles.respond.setHandler('get:focus:list', function () {
      return foci;
    });

  });

}());