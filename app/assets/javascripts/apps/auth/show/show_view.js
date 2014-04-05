/*jslint indent: 2, nomen: true*/
/*global Marbles */
(function () {
  "use strict";

  Marbles.module('AuthApp.Show', function (Show, Marbles, Backbone, Marionette, $, _) {
    Show.View = Marionette.ItemView.extend({
      template: 'auth/show/show',
      events: {
        'click .log-in': function () {
          this.trigger('auth:log-in')
        },
        'click .sign-up': function () {
          this.trigger('auth:sign-up')
        }
      }
    });
  });

}());