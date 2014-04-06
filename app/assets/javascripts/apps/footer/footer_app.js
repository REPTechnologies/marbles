/*jslint indent: 2, nomen: true*/
/*global Marbles */
(function () {
  "use strict";

  Marbles.module('FooterApp', function defineFooterAppFn(FooterApp, Marbles, Backbone, Marionette, $, _) {
    this.startWithParent = false;

    var API = {
      showFooter: function showFooterFn() {
        FooterApp.Show.Controller.showFooter();
      }
    };

    FooterApp.on('start', function startFooterAppFn() {
      API.showFooter();
      Marbles.mainRegion.on('show', setFooterPosition);
    });
  });

}());
