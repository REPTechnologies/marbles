(function () {
  'use strict';

  Marbles.module('PollApp.Show', function (Show, Marbles, Backbone, Marionette, $, _) {

    function bindAnswer(layout, answers, i, el) {
      var $answer = $(el);
      var index = $answer.parent().index();
      var answer = answers.at(index);
      var $slider = $answer.find('.slider-input');
      var $badge = layout.$el.find('.answers .list-group-item:nth-child(' + (index + 1) + ') .badge');
      answer.set('question_id', $slider.data('question-id'));

      $slider.change(function(event) {
        var value = event.value.newValue || 0;
        answer.set('slider', value);
        $badge.text(value);
      });
    }

    function bindModels(layout, userpoll) {
      layout.$el.find('.answer').each(_.bind(bindAnswer, this, layout, userpoll.get('answers')));
    }

    function saveSuccess(model, response, options) {
      Marbles.vent.trigger('trends:show');
    }

    function saveFailure(model, response, options) {
      M.fn.errorResponse(response);
    }

    Show.Controller = Marbles.Controller.extend({
      initialize: function initializeFn() {
        var poll = Marbles.request('get:active:poll');
        poll.get('questions').at(0).set('active', true);

        this.userpoll = Marbles.request('new:userpoll');
        this.userpoll.set('poll_id', poll.get('id'));

        this.layout = this.getLayoutView(poll);
        this.listenTo(this.layout, 'show', function showFn() {
          bindModels(this.layout, this.userpoll);
        });
        this.listenTo(this.layout, 'poll:submit', this.pollSubmit);

        this.show(this.layout);
      },
      getLayoutView: function getLayoutViewFn(poll) {
        return new Show.Layout({model: poll});
      },
      pollSubmit: function pollSubmitFn() {
        var valid = this.userpoll.save({}, {
          success: saveSuccess,
          error: saveFailure
        });

        if (!valid) {
          Marbles.commands.execute('error:invalid', this.userpoll.validationError);
        }
      }
    });
  });

}());
