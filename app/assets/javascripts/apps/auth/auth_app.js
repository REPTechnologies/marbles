/*jslint indent: 2, nomen: true*/
/*global Marbles */
(function () {
  "use strict";

  Marbles.module('AuthApp', function (AuthApp, Marbles, Backbone, Marionette, $, _) {
    this.startWithParent = false;

    AuthApp.on('start', function (layout) {
      AuthApp.Show.Controller.showAuth(layout);
    });
  });

}());
