(function () {
  'use strict';

  function relocateModal(i, el) {
    $(el).appendTo('body');
  }

  function relocateModals(view) {
    $('.modal', view.$el).each(relocateModal);
  }

  Marbles.Region = Marionette.Region.extend({
    onBeforeShow: relocateModals
  });

}());
