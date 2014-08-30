(function () {

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