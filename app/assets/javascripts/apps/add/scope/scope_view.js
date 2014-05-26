/*jslint indent: 2, nomen: true*/
/*global Marbles */
(function () {
  "use strict";

  Marbles.module('AddApp.New.Scope', function (Scope, Marbles, Backbone, Marionette, $, _) {

    function toggleScope() {
      this.$el.toggleClass('btn-primary');
      this.trigger('scope:' + (this.$el.hasClass('btn-primary') ? 'add' : 'remove'));
    }

    Scope.View = Marionette.ItemView.extend({
      template: 'add/scope/view',
      className: 'scope btn btn-default',
      events: {
        'click': 'toggle'
      },
      toggle: toggleScope
    });

    Scope.Picker = Marionette.CompositeView.extend({
      template: 'add/scope/picker',
      itemView: Scope.View,
      itemViewContainer: '.scope-pool'
    });
  });

}());
