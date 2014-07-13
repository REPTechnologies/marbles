(function () {
  'use strict';

  function relocateModal(i, modal) {
    var $modal = $(modal).detach().appendTo('body');
    this.modals[_.str.camelize($modal.prop('id'))] = $modal;
  }

  function relocateModals(view) {
    $('.modal', view.$el).each(relocateModal.bind(this));
  }

  Marbles.Region = Marionette.Region.extend({
    onBeforeShow: relocateModals,
    modals: {}
  });

}());
