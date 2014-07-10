/*jslint indent: 2, nomen: true*/
/*global Marbles */
(function () {
  "use strict";

  Marbles.module('AddApp.New.Focus', function (Focus, Marbles, Backbone, Marionette, $, _) {

    function animateDrop(to) {
      $(this).stop(true, false).animate(to);
    }

    function scrubDraggable($draggable) {
      return $draggable
        .removeClass('ui-draggable ui-sortable-helper')
        .removeAttr('style')
        .removeAttr('id');
    }

    function getFocusPool(picker) {
      return picker.$el.find('.focus-pool');
    }

    function dropFocusFn(picker) {
      var $focusPool = getFocusPool(picker);

      return function dropFocus(e, ui) {
        var $drop = $(this),
          focusId = $drop.prop('id').replace('drop', 'focus'),
          focusName = focusId.replace('-', '_') + '_id',
          $newFocus = scrubDraggable(ui.draggable.clone()).draggable({
            connectToSortable: '.focus-pool',
            containment: '#focus-region',
            tolerance: 'pointer',
            scroll: false,
            cursor: 'move',
            stack: '.focus',
            revert: 'invalid'
          });

        scrubDraggable($('#' + focusId).remove()).appendTo($focusPool);
        $focusPool.sortable('refresh');

        $newFocus.appendTo($drop.parent()).prop('id', focusId);
        $newFocus.position({of: ui.draggable});
        $newFocus.position({of: $drop, using: animateDrop});
        $('[name="' + focusName + '"]').val($newFocus.find('.btn').data('id')).change();

        ui.draggable.remove();
      };
    }

    function unselectFocus(e, ui) {
      var focusId = ui.item.prop('id'),
        focusName = focusId.replace('-', '_') + '_id';
      $('[name="' + focusName + '"]').val('').change();
    }

    function initDragAndDrop(picker) {
      picker.$el.find('.focus-pool').sortable({
        containment: '#focus-region',
        tolerance: 'pointer',
        scroll: false,
        cursor: 'move',
        items: '> .focus',
        revert: true,
        receive: unselectFocus
      });

      picker.$el.find('.focus-drop').droppable({
        accept: '.focus',
        tolerance: 'pointer',
        drop: dropFocusFn(picker),
        activeClass: 'can-drop',
        hoverClass: 'will-drop'
      });
    }

    Focus.View = Marionette.ItemView.extend({
      template: 'add/focus/view',
      className: 'focus col-sm-4'
    });

    Focus.Picker = Marionette.CompositeView.extend({
      template: 'add/focus/picker',
      childView: Focus.View,
      childViewContainer: '.focus-pool',
      onRender: initDragAndDrop
    });
  });

}());