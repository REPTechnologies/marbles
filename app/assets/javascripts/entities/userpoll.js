(function () {
  'use strict';

  Marbles.module('Entities', function (Entities, Marbles, Backbone, Marionette, $, _) {

    Entities.Userpoll = Marbles.RelationalModel.extend({
      paramRoot: 'userpoll',
      urlRoot: Routes.v1_userpolls_path(),
      relations: [{
        type: Backbone.HasMany,
        key: 'answers',
        relatedModel: 'Answer',
        collectionType: 'AnswerCollection',
        keyDestination: 'answers_attributes'
      }]
    });

    Marbles.respond.setHandler('new:userpoll', function () {
      var userpoll = new Entities.Userpoll();
      userpoll.get('answers').add(Marbles.request('new:answers'));
      return userpoll;
    });

  });

}());
