/*jslint indent: 2, nomen: true*/
/*global Marionette, Backbone */
(function () {
  "use strict";

  var Marbles = new Marionette.Application();
  window.Marbles = Marbles; // Add Marbles to Global scope

  Marbles.addRegions({
    headerRegion: '#header-region',
    mainRegion: '#main-region',
    footerRegion: '#footer-region'
  });

  Marbles.addInitializer(function () {
    Marbles.module('HeaderApp').start();
    Marbles.module('FooterApp').start();
  });

  //Navigate to specific route
  Marbles.navigate = function (route, options) {
    options = options || {};
    Backbone.history.navigate(route, options);
  };

  //Returns current route
  Marbles.getCurrentRoute = function () {
    return Backbone.history.fragment;
  };

  Marbles.on('initialize:after', function () {
    //Things to do after app initialize
    if (Backbone.history) {
      Backbone.history.start({
        pushState: true
      });
    }
  });

}());