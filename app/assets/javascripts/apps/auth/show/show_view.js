(function () {
  'use strict';

  Marbles.module('AuthApp.Show', function (Show, Marbles, Backbone, Marionette, $, _) {

    function failure(response) {
      M.fn.errorResponse(response);
    }

    function loggedIn(user) {
      Marbles.request('update:current:user', user);
    }

    function initLogInModal(view, $logInModal) {
      $logInModal.find('#log-in-button').click(function() {
        var data = $logInModal.find('input').serialize();
        var url = Routes.user_session_path({format: 'json'});
        $.post(url, data).fail(failure).done(loggedIn).done(function () {
          $logInModal.modal('hide');
        });
      });
    }

    function initSignUpModal(view, $signUpModal) {
      $signUpModal.find('#sign-up-button').click(function() {
        var data = $signUpModal.find('input').serialize();
        var url = Routes.user_registration_path({format: 'json'});
        $.post(url, data).fail(failure).done(loggedIn).done(function () {
          $signUpModal.modal('hide');
        });
      });
    }

    function initModals() {
      var modals = Marbles.headerRegion.currentView.authRegion.modals;
      initLogInModal(this, modals.logInModal);
      initSignUpModal(this, modals.signUpModal);
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
