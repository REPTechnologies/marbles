/*jslint indent: 2, nomen: true*/
/*global Marbles */
(function () {
  "use strict";

  Marbles.module('Entities', function (Entities, Marbles, Backbone, Marionette, $, _) {

    Entities.Model = Backbone.Model.extend({
      toJSON: function (options) {
        var json = {};
        if (this.jsonNamespace) {
          json[this.jsonNamespace] = _.clone(this.attributes);
        } else {
          json = _.clone(this.attributes);
        }
        return json;
      },
      parse: function (resp, options) {
        return this.jsonNamespace ? resp[this.jsonNamespace] || resp : resp;
      }
    });

  });

}());