/*jslint indent: 2, nomen: true*/
/*global Marbles */
(function () {
  "use strict";

  Marbles.module('AddApp.New.Scope', function (Scope, Marbles, Backbone, Marionette, $, _) {

    /*Scope.View = Marionette.ItemView.extend({
      template: 'add/new/scope',
      className: 'scope col-sm-2'
    });*/

    Scope.Picker = Marionette.ItemView.extend({
      template: 'add/new/scope'
      //itemView: Scope.View,
      //itemViewContainer: '.scope-pool'
    });
  });

}());
