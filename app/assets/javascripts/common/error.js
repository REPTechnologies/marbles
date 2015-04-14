(function () {
  'use strict';

  function displayAlert() {
    var args = new Args([
      {value: Args.STRING | Args.Required},
      {key: Args.STRING | Args.Optional, _default: 'error'},
      {prefix: Args.STRING | Args.Optional, _default: ''},
      {timeout: Args.INT | Args.Optional, _default: 3000} // 3 second fade-out default
    ], arguments);

    dust.render('alert', args, function (err, out) {
      var $alertNode = $(out).appendTo($('#messages'));
      window.setTimeout(function () {
        // Removes the alert from the DOM (see http://getbootstrap.com/javascript/#alerts)
        $alertNode.alert('close');
      }, args.timeout);
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
