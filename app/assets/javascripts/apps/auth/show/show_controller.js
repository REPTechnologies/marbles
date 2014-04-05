/*jslint indent: 2, nomen: true*/
/*global Marbles */
(function () {
  "use strict";
  
  Marbles.module('AuthApp.Show', function (Show, Marbles, Backbone, Marionette, $, _) {

    function getAuthView() {
      var authView = new Show.View();
      authView.on('auth:log-in', function () {
        window.location = Routes.new_user_session_path();
      });
      authView.on('auth:sign-up', function () {
        window.location = Routes.new_user_registration_path();
      });
      return authView;
    }

    Show.Controller = {
      showAuth: function (layout) {
        layout.authRegion.show(getAuthView());
        layout.authXSRegion.show(getAuthView());
      }
    };
  });

}());