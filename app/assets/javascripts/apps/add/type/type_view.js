/*jslint indent: 2, nomen: true*/
/*global Marbles */
(function () {
  "use strict";

  Marbles.module('AddApp.New.Type', function (Type, Marbles, Backbone, Marionette, $, _) {

    function unselectTypes(type) {
      type.$el.parent().find('.type').removeClass('btn-primary');
    }

    function selectType() {
      unselectTypes(this);
      this.$el.addClass('btn-primary');
      $('[name="type"]').val(this.model.get('name')).change();
    }

    Type.View = Marionette.ItemView.extend({
      template: 'add/type/view',
      className: 'type btn btn-default',
      events: {
        'click': 'select'
      },
      select: selectType
    });

    Type.Picker = Marionette.CompositeView.extend({
      template: 'add/type/picker',
      itemView: Type.View,
      itemViewContainer: '.type-pool'
    });
  });

}());
