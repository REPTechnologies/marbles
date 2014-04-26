/*jslint indent: 2, nomen: true*/
/*global Marbles */
(function () {
  "use strict";

  Marbles.module('Entities', function (Entities, Marbles, Backbone, Marionette, $, _) {

    Entities.Focus = Backbone.Model.extend({});

    Entities.FocusCollection = Backbone.Collection.extend({
      model: Entities.Focus
    });

    var API = {
      setFoci: function (foci) {
        return new Entities.FocusCollection(foci || {});
      }
    };

    Marbles.respond.setHandler('set:focus:list', function (foci) {
      return API.setFoci(foci);
    });

  });

}());