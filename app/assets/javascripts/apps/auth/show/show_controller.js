/*jslint indent: 2, nomen: true*/
/*global Marbles */
(function () {
  "use strict";
  
  Marbles.module('AuthApp.Show', function (Show, Marbles, Backbone, Marionette, $, _) {

    function logOut() {
      $.ajax(Routes.destroy_user_session_path(), {
        type: 'DELETE'
      }).always(function () {
        Marbles.request('destroy:current:user');
        window.location = Routes.new_user_session_path();
      });
    }

    function getAuthView(currentUser) {
      var authView = new Show.View({
        model: currentUser
      });
      authView.on('auth:log:in', function () {
        window.location = Routes.new_user_session_path();
      });
      authView.on('auth:sign:up', function () {
        window.location = Routes.new_user_registration_path();
      });
      authView.on('auth:edit:user', function () {
        window.location = Routes.edit_user_registration_path();
      });
      authView.on('auth:log:out', logOut);
      return authView;
    }

    Show.Controller = {
      showAuth: function (layout) {
        var currentUser = Marbles.request('get:current:user');
        layout.authRegion.show(getAuthView(currentUser));
        layout.authXSRegion.show(getAuthView(currentUser));
      }
    };
  });

}());