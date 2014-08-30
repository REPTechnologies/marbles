(function () {
  'use strict';

  Marbles.module('AddApp.New.Organization', function (Organization, Marbles, Backbone, Marionette, $, _) {

    function toggleOrganizationInput() {
      this.ui.orgInput.toggleClass('hidden');
      this.ui.orgInput.filter('select.hidden, input.hidden').prop('disabled', true).val('').change();
      this.ui.orgInput.filter('select, input').not('.hidden').prop('disabled', false);
    }

    Organization.Picker = Marbles.ItemView.extend({
      template: 'add/organization/picker',
      modelEvents: {
        change: 'render'
      },
      ui: {
        toggleOrg: '.toggleOrganizationLink',
        orgInput: '.organizationInput'
      },
      events: {
        'click @ui.toggleOrg': toggleOrganizationInput
      }
    });
  });

}());
