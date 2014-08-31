(function () {
  'use strict';

  Marbles.module('FooterApp', function (FooterApp, Marbles, Backbone, Marionette, $, _) {
    this.startWithParent = false;

    FooterApp.on('start', function startFooterAppFn() {
      return new FooterApp.Show.Controller({
        region: Marbles.footerRegion
      });
    });
  });

}());
