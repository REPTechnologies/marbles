(function () {
  'use strict';

  Marbles.module('Entities', function (Entities, Marbles, Backbone, Marionette, $, _) {

    Entities.Question = Marbles.RelationalModel.extend({});

    Entities.QuestionCollection = Backbone.Collection.extend({
      model: Entities.Question
    });

  });

}());
