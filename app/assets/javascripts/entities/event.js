/*jslint indent: 2, nomen: true*/
/*global Marbles */
(function () {
  "use strict";

  Marbles.module("Entities", function (Entities, Marbles, Backbone, Marionette, $, _) {

    Entities.Event = Backbone.Model.extend({
      urlRoot: Routes.v1_events_path()
    });

    Entities.EventsCollection = Backbone.Collection.extend({});

    var API = {};

  });

}());
