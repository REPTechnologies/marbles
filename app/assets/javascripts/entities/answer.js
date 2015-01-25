(function () {
  'use strict';

  Marbles.module('Entities', function (Entities, Marbles, Backbone, Marionette, $, _) {

    Entities.Answer = Marbles.RelationalModel.extend({
      relations: [{
        type: Backbone.HasOne,
        key: 'question',
        relatedModel: 'Question',
        collectionType: 'QuestionCollection',
        includeInJSON: 'id',
        keyDestination: 'question_id'
      }]
    });

    Entities.AnswerCollection = Backbone.Collection.extend({
      model: Entities.Answer
    });

    Marbles.respond.setHandler('new:answer', function () {
      return new Entities.Answer();
    });

    Marbles.respond.setHandler('new:answers', function () {
      var answers = [];
      _.times(Marbles.request('get:poll:length'), function () {
        this.push(Marbles.request('new:answer'));
      }, answers);

      return new Entities.AnswerCollection(answers);
    });

  });

}());
