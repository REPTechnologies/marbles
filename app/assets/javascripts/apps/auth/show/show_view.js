(function () {
  'use strict';

  Marbles.module('AuthApp.Show', function (Show, Marbles, Backbone, Marionette, $, _) {

    function loggedIn(user) {
      Marbles.request('set:current:user', user);
    }

    function loginFailure(response) {
      M.fn.errorResponse(response);
    }

    function initLogInModal(view, $logInModal) {
      $logInModal.find('#log-in-button').click(function() {
        var data = $logInModal.find('input').serialize();
        var url = Routes.user_session_path({format: 'json'});
        $.post(url, data).done(loggedIn).fail(loginFailure);
      });
    }

    function initModals(view) {
      var modals = Marbles.headerRegion.currentView.authRegion.modals;
      initLogInModal(view, modals.logInModal);
    }

    Show.View = Marionette.ItemView.extend({
      template: 'auth/show/show',
      templateHelpers: M.fn.removeArguments(Routes),
      modelEvents: {
        change: 'render'
      },
      triggers: {
        'click @ui.logOut': 'auth:log:out'
      },
      ui: {
        logOut: '.log-out'
      },
      onShow: initModals
    });
  });

}());
