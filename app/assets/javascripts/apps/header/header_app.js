(function () {
  'use strict';

  Marbles.module('HeaderApp', function (HeaderApp, Marbles, Backbone, Marionette, $, _) {
    this.startWithParent = false;

    HeaderApp.on('start', function startHeaderAppFn() {
      return new HeaderApp.Show.Controller({
        region: Marbles.headerRegion
      });
    });
  });

}());
