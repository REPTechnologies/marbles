(function () {
  'use strict';

  var Marbles = new Marionette.Application();
  window.Marbles = Marbles; // Add Marbles to Global scope
  window.M = Marbles; // Add M shortcut to Global scope

  // Shortcuts and Aliases
  window.M.respond = window.M.reqres;

  //local variables
  var foci = [];
  var scopes = [];
  var eventTypes = [];

  Marbles.on('before:start', function (options) {
    Marbles.request('set:current:user', options.currentUser);
    foci = Marbles.request('set:focus:list', options.foci);
    scopes = Marbles.request('set:scope:list', options.scopes);
    eventTypes = Marbles.request('set:event:type:list', options.eventTypes);
  });

  Marbles.respond.setHandler('get:focus:list', function () {
    return foci;
  });

  Marbles.respond.setHandler('get:scope:list', function () {
    return scopes;
  });

  Marbles.respond.setHandler('get:event:type:list', function () {
    return eventTypes;
  });

  Marbles.addRegions({
    headerRegion: '#header-region',
    mainRegion: '#main-region',
    footerRegion: '#footer-region'
  });

  Marbles.respond.setHandler('default:region', function () {
    return Marbles.mainRegion;
  });

  Marbles.addInitializer(function () {
    Marbles.module('HeaderApp').start();
    Marbles.module('FooterApp').start();
  });

  Marbles.commands.setHandler('register:instance', function (instance, id) {
    //Marbles.register(instance, id);
  });

  Marbles.commands.setHandler('unregister:instance', function (instance, id) {
    //Marbles.unregister(instance, id);
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

  Marbles.on('start', function () {
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

  function displayErrors(errors) {
    if ($.isArray(errors)) {
      $.each(errors, function (i, error) {
        displayAlert(error);
      });
    } else {
      displayAlert(errors);
    }
  }

  Marbles.commands.setHandler('error:invalid', displayErrors);
  Marbles.commands.setHandler('error:unauthorized', displayErrors);

  Marbles.commands.setHandler('error:notfound', function (errors) {
    displayErrors(errors);
    console.warn('TODO: not implemented');
  });

  Marbles.commands.setHandler('error:unexpected', function (errors) {
    displayAlert('Sorry, something went wrong. Please try again or contact help@reptech.io for assistance.');
    console.warn('TODO: send errors to server and/or newrelic');
  });

}());
