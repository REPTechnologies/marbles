/*jslint indent: 2, nomen: true*/
/*global Marbles */
(function () {
  "use strict";

  Marbles.module('AddApp.New.Type', function (Type, Marbles, Backbone, Marionette, $, _) {

    /*Type.View = Marionette.ItemView.extend({
      template: 'add/new/type',
      className: 'type col-sm-4'
    });*/

    Type.Picker = Marionette.ItemView.extend({
      template: 'add/new/type'
      //itemView: Type.View,
      //itemViewContainer: '.type-pool'
    });
  });

}());
