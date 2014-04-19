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
        .removeAttr('style');
    }

    function dropFocusFn(picker) {
      var $focusPool = picker.$el.find('.focus-pool');

      return function dropFocus(e, ui) {
        var $drop = $(this),
          focusId = $drop.prop('id').replace('drop', 'focus'),
          $newFocus = scrubDraggable(ui.draggable.clone()).draggable({
            connectToSortable: '.focus-pool',
            containment: '#focus-region',
            tolerance: 'pointer',
            scroll: false,
            cursor: 'move',
            stack: '.focus',
            revert: 'invalid'
          });

        scrubDraggable($('#' + focusId).remove().removeAttr('id')).appendTo($focusPool);
        $focusPool.sortable('refresh');

        $newFocus.appendTo($drop.parent()).prop('id', focusId);
        $newFocus.position({of: ui.draggable});
        $newFocus.position({of: $drop, using: animateDrop});

        ui.draggable.remove();
      };
    }

    function initDragAndDrop(picker) {
      picker.$el.find('.focus-pool').sortable({
        containment: '#focus-region',
        tolerance: 'pointer',
        scroll: false,
        cursor: 'move',
        items: '> .focus',
        revert: true
      });

      picker.$el.find('.focus-drop').droppable({
        accept: '.focus',
        tolerance: 'pointer',
        drop: dropFocusFn(picker),
        activeClass: 'can-drop',
        hoverClass: 'will-drop'
      });
    }

    Focus.Picker = Marionette.ItemView.extend({
      template: 'add/focus/picker',
      onRender: initDragAndDrop
    });
  });

}());