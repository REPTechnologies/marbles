(function () {
  'use strict';

  Marbles.module('Entities', function (Entities, Marbles, Backbone, Marionette, $, _) {

    Entities.Trend = Backbone.Model.extend({});

    Entities.TrendCollection = Backbone.Collection.extend({
      model: Entities.Trend
    });

  });

}());