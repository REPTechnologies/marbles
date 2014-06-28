/*jslint indent: 2, nomen: true*/
/*global Marbles */
(function () {
  "use strict";

  Marbles.module('AddApp.New.Organization', function (Organization, Marbles, Backbone, Marionette, $, _) {

    function toggleOrganizationInput() {
      this.ui.orgInput.toggleClass('hidden');
      this.ui.orgInput.filter('select.hidden, input.hidden').prop('disabled', true);
      this.ui.orgInput.filter('select, input').not('.hidden').prop('disabled', false);
    }

    Organization.Picker = Marionette.ItemView.extend({
      template: 'add/organization/picker',
      ui: {
        toggleOrg: '.toggleOrganizationLink',
        orgInput: '.organizationInput'
      },
      events: {
        'click @ui.toggleOrg': 'toggleOrg'
      },
      toggleOrg: toggleOrganizationInput
    });
  });

}());
