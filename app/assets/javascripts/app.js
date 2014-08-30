(function () {
  'use strict';

  var Marbles = new Marionette.Application({
    regions: {
      headerRegion: '#header-region',
      mainRegion: '#main-region',
      footerRegion: '#footer-region'
    },
    register: function registerFn(instance, id) {
      this.registry = this.registry || {};
      this.registry[id] = instance;
    },
    unregister: function unregisterFn(instance, id) {
      delete this.registry[id]; 
    },
    naviate: function navigateFn(route, options) {
      options = options || {};
      Backbone.history.navigate(route, options);
    },
    getCurrentRoute: function getCurrentRouteFn() {
      return Backbone.history.fragment;
    }
  });

  window.Marbles = Marbles; // Add Marbles to Global scope
  window.M = Marbles; // Add M shortcut to Global scope
  window.M.respond = window.M.reqres; // Alias reqres

  Marbles.on('before:start', function (options) {
    Marbles.execute('set:current:user', options.currentUser);
    Marbles.execute('set:focus:list', options.foci);
    Marbles.execute('set:scope:list', options.scopes);
    Marbles.execute('set:event:type:list', options.eventTypes);
  });

  Marbles.respond.setHandler('default:region', function () {
    return Marbles.mainRegion;
  });

  Marbles.addInitializer(function () {
    Marbles.module('HeaderApp').start();
    Marbles.module('FooterApp').start();
  });

  Marbles.commands.setHandler('register:instance', function (instance, id) {
    Marbles.register(instance, id);
  });

  Marbles.commands.setHandler('unregister:instance', function (instance, id) {
    Marbles.unregister(instance, id);
  });

  Marbles.on('start', function () {
    //Things to do after app initialize
    if (Backbone.history) {
      Backbone.history.start({
        pushState: true
      });
    }
  });

}());
