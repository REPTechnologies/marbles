(function () {
  'use strict';

  Marbles.module('AuthApp.Show', function (Show, Marbles, Backbone, Marionette, $, _) {
    Show.View = Marionette.ItemView.extend({
      template: 'auth/show/show',
      templateHelpers: M.fn.removeArguments(Routes),
      modelEvents: {
        change: 'render'
      },
      triggers: {
        'click .log-out': 'auth:log:out'
      }
    });
  });

}());
