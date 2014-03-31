/*jslint indent: 2, nomen: true*/
/*global Marbles */
(function () {
  "use strict";

  Marbles.module('FooterApp', function (FooterApp, Marbles, Backbone, Marionette, $, _) {
    this.startWithParent = false;

    function setFakeFooterHeightFn() {
      var $fakeFooter = $('#fake-footer'),
        $footerRegion = $('#footer-region'),
        resizeFooter = function resizeFooterFn() {
          $fakeFooter.height($footerRegion.height());
        };
      $(window).resize(resizeFooter);
      resizeFooter();
    }

    var API = {
      showFooter: function () {
        FooterApp.Show.Controller.showFooter();
      }
    };

    FooterApp.on('start', function () {
      API.showFooter();
      setFakeFooterHeightFn();
    });
  });

}());
