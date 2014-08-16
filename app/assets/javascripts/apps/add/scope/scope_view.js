(function () {
  'use strict';

  Marbles.module('AddApp.New.Scope', function (Scope, Marbles, Backbone, Marionette, $, _) {

    function toggleScope() {
      this.$el.toggleClass('btn-primary');
      this.trigger('scope:' + (this.$el.hasClass('btn-primary') ? 'add' : 'remove'));
    }

    Scope.View = Marionette.ItemView.extend({
      template: 'add/scope/view',
      className: 'scope btn btn-default',
      events: {
        'click': toggleScope
      }
    });

    Scope.Picker = Marionette.CompositeView.extend({
      template: 'add/scope/picker',
      childView: Scope.View,
      childViewContainer: '.scope-pool'
    });
  });

}());
