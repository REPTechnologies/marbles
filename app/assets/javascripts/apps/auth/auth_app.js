/*jslint indent: 2, nomen: true*/
/*global Marbles */
(function () {
  "use strict";

  Marbles.module('AuthApp', function (AuthApp, Marbles, Backbone, Marionette, $, _) {
    this.startWithParent = false;

    var API = {
      showAuth: function (layout) {
        AuthApp.Show.Controller.showAuth(layout);
      }
    };

    AuthApp.on('start', function (layout) {
      API.showAuth(layout);
    });
  });

}());
