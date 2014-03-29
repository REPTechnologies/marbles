/*jslint indent: 2, nomen: true*/
/*global Marbles */
(function () {
  "use strict";

  Marbles.module('HeaderApp.Show', function (Show, Marbles, Backbone, Marionette, $, _) {
    Show.View = Marionette.ItemView.extend({
      template: 'header/show/show',
      events: {
        'click #header-find': function () {
          this.trigger('header:find');
        },
        'click #header-add': function () {
          this.trigger('header:add');
        },
        'click #header-track': function () {
          this.trigger('header:track');
        }
      }
    });
  });

}());
