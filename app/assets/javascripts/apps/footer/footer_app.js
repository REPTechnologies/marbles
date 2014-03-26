Marbles.module('FooterApp', function (FooterApp, Marbles, Backbone, Marionette, $, _) {
  this.startWithParent = false;

  var API = {
    showFooter: function () {
      FooterApp.Show.Controller.showFooter();
    }
  };

  FooterApp.on('start', API.showFooter);
});
