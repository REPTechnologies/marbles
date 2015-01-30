(function () {
  'use strict';

  Marbles.module('PollApp.Show', function (Show, Marbles, Backbone, Marionette, $, _) {

    function initSlider(i, el) {
      var $slider = $(el);
      var slider = $slider.slider();
      slider.on('change', _.debounce(function(data) {
        $slider.change(data);
      }, 10, true));
    }

    function initSliders(layout) {
      layout.$el.find('.slider-input').each(_.bind(initSlider, layout));
    }

    function onRender(layout) {
      initSliders(layout);
      layout.$el.find('#poll-carousel').on('slid.bs.carousel', resizeFooter);
    }

    Show.Layout = Marionette.LayoutView.extend({
      template: 'poll/show/show',
      templateHelpers: function () {return Marbles.PollApp.TemplateHelpers;},
      regions: {},
      onRender: onRender,
      triggers: {
        'click #submit-poll-btn': 'poll:submit',
      }
    });

  });

}());
