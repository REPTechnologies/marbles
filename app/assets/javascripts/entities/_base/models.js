/*jslint indent: 2, nomen: true*/
/*global Marbles */
(function () {
  "use strict";

  Marbles.module('Entities', function (Entities, Marbles, Backbone, Marionette, $, _) {

    Backbone.Relational.store.addModelScope(Entities);

    Entities.Model = Backbone.RelationalModel.extend({
      toJSON: function (options) {
        var data = Backbone.RelationalModel.prototype.toJSON.apply(this, arguments), //super
          json = {};
        if (this.paramRoot) {
          json[this.paramRoot] = data;
        } else {
          json = data;
        }
        return json;
      },
      parse: function (resp, options) {
        return this.paramRoot ? resp[this.paramRoot] || resp : resp;
      }
    });

  });

}());