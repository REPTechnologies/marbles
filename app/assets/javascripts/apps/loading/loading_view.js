(function () {
  'use strict';

  Marbles.module('Loading', function (Loading, Marbles, Backbone, Marionette, $, _) {

    var spinOptions = {

    };

    Loading.View = Marbles.ItemView.extend({
      template: 'loading/show',
      className: 'loading-container',
      onShow: function () {
        this.$el.spin(spinOptions);
      },
      onDestroy: function () {
        this.$el.spin(false);
      }
    });

  });

}());
