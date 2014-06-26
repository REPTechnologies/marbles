/*jslint indent: 2, nomen: true*/
/*global Marbles */
(function () {
  "use strict";

  Marbles.module('AddApp.New.Organization', function (Organization, Marbles, Backbone, Marionette, $, _) {

    Organization.Picker = Marionette.ItemView.extend({
      template: 'add/organization/picker'
    });
  });

}());
