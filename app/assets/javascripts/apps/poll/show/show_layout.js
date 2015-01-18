(function () {
  'use strict';

  Marbles.module('PollApp.Show', function (Show, Marbles, Backbone, Marionette, $, _) {

    function initSliders(layout) {
      layout.$el.find('.slider').slider();
    }

    Show.Layout = Marionette.LayoutView.extend({
      template: 'poll/show/show',
      templateHelpers: function () {return Marbles.PollApp.TemplateHelpers;},
      regions: {},
      onRender: initSliders
    });

  });

}());
