(function () {
  'use strict';

  Marbles.module('Entities', function (Entities, Marbles, Backbone, Marionette, $, _) {

    Entities.Poll = Marbles.RelationalModel.extend({
      relations: [{
        type: Backbone.HasMany,
        key: 'questions',
        relatedModel: 'Question',
        collectionType: 'QuestionCollection'
      }]
    });

    var activePoll = {};

    Marbles.commands.setHandler('set:active:poll', function (pollData) {
      activePoll = new Entities.Poll(pollData || {});
    });

    Marbles.respond.setHandler('get:active:poll', function () {
      return activePoll;
    });

    Marbles.respond.setHandler('get:poll:length', function () {
      return activePoll.get('questions').length;
    });

  });

}());
