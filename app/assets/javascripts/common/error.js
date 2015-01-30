(function () {
  'use strict';

  function displayAlert() {
    var args = new Args([
      {value: Args.STRING | Args.Required},
      {key: Args.STRING | Args.Optional, _default: 'error'},
      {prefix: Args.STRING | Args.Optional, _default: ''}
    ], arguments);

    dust.render('alert', args, function (err, out) {
      $('#messages').append(out);
    });
  }

  function displayErrors(errors, prefix) {
    if ($.isArray(errors)) {
      $.each(errors, function (i, error) {
        displayAlert(error, {prefix: prefix});
      });
    } else if ($.isPlainObject(errors)) {
      $.each(errors, function (key, error) {
        displayErrors(error, _.str.titleize(_.str.humanize(key)) + ' ');
      });
    } else {
      displayAlert(errors, {prefix: prefix});
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
