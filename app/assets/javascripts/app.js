/*jslint indent: 2, nomen: true*/
/*global Marionette, Backbone, Args */
(function () {
  "use strict";

  var Marbles = new Marionette.Application();
  window.Marbles = Marbles; // Add Marbles to Global scope
  window.M = Marbles; // Add M shortcut to Global scope

  // Shortcuts and Aliases
  window.M.respond = window.M.reqres;

  //local variables
  var currentUser = {};
  var foci = [];

  Marbles.on('initialize:before', function (options) {
    currentUser = Marbles.request('set:current:user', options.currentUser);
    foci = Marbles.request('set:focus:list', options.foci);
  });

  Marbles.respond.setHandler('get:current:user', function () {
    return currentUser;
  });

  Marbles.respond.setHandler('destroy:current:user', function () {
    currentUser.clear();
  });

  Marbles.respond.setHandler('get:focus:list', function () {
    return foci;
  });

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

  function displayAlert() {
    var args = new Args([
      {value: Args.STRING | Args.Required},
      {key: Args.STRING | Args.Optional, _default: 'error'}
    ], arguments);

    dust.render('alert', args, function (err, out) {
      $('#messages').append(out);
    });
  }

  Marbles.commands.setHandler('error:invalid', function (errors) {
    if ($.isArray(errors)) {
      $.each(errors, function (i, error) {
        displayAlert(error);
      });
    } else {
      displayAlert(errors);
    }
  });

  Marbles.commands.setHandler('error:notfound', function (errors) {
    console.warn('TODO: not implemented');
  });

  Marbles.commands.setHandler('error:unexpected', function (errors) {
    displayAlert('Sorry, something went wrong. Please try again or contact help@reptech.io for assistance.');
    console.warn('TODO: send errors to server and/or newrelic');
  });

}());