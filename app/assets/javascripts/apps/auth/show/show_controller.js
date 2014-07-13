(function () {
  'use strict';
  
  Marbles.module('AuthApp.Show', function (Show, Marbles, Backbone, Marionette, $, _) {

    function logOut() {
      $.ajax(Routes.destroy_user_session_path(), {
        type: 'DELETE'
      }).always(function () {
        Marbles.request('destroy:current:user');
        window.location = Routes.new_user_session_path();
      });
    }

    function logIn() {
      
    }

    function getAuthView(currentUser) {
      var authView = new Show.View({
        model: currentUser
      });
      authView.on('auth:log:out', logOut);
      authView.on('auth:log:in', logIn);
      return authView;
    }

    Show.Controller = {
      showAuth: function (layout) {
        var currentUser = Marbles.request('get:current:user');
        layout.authRegion.show(getAuthView(currentUser));
      }
    };
  });

}());
