/*jslint indent: 2, nomen: true*/
/*global Marbles */
(function () {
  "use strict";

  Marbles.module('HeaderApp', function (HeaderApp, Marbles, Backbone, Marionette, $, _) {
    this.startWithParent = false;

    var API = {
      showHeader: function () {
        HeaderApp.Show.Controller.showHeader();
      }
    };

    HeaderApp.on('start', API.showHeader);
  });

}());
