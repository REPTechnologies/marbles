(function () {
  'use strict';
  
  Marbles.module('AuthApp.Show', function (Show, Marbles, Backbone, Marionette, $, _) {

    function logOut() {
      $.ajax(Routes.destroy_user_session_path(), {
        type: 'DELETE'
      }).always(function () {
        Marbles.execute('destroy:current:user');
        Marbles.execute('new:session');
      });
    }

    Show.Controller = Marbles.Controller.extend({
      initialize: function initializeFn() {
        var user = Marbles.request('get:current:user');

        this.view = this.getView(user);
        this.listenTo(this.view, 'auth:log:out', logOut);

        this.show(this.view);
      },
      getView: function (user) {
        return new Show.View({model: user});
      }
    });
  });

}());
