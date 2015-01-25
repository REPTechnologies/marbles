(function () {
  'use strict';

  var $window = $(window);
  var resizingCharts = [];

  $window.resize(function chartResize() {
    dc.disableTransitions = true;
    _.each(resizingCharts, function resizeEach(config) {
      config.chart.width(config.container.innerWidth())
      config.chart.rescale();
    });
    dc.renderAll();
    dc.disableTransitions = false;
  });

  // Define common utility functions
  M.fn = {
    getLayout: function getLayoutFn() {
      var args = new Args([
        {SubModule: Args.OBJECT | Args.Required},
        {show: Args.FUNCTION | Args.Optional, _default: $.noop},
        {model: Args.OBJECT | Args.Optional}
      ], arguments),
        layout = new args.SubModule.Layout({
          model: args.model || undefined
        });

      layout.on('show', function () {
        args.show.call(this, this);
      });

      return layout;
    },
    bindModel: function bindModelFn(view, bindings, options) {
      view.binder = view.binder || new Backbone.ModelBinder();
      var defaultBindings = Backbone.ModelBinder.createDefaultBindings(view.el, 'name'),
        deleteBindings = options.deleteBindings;
      delete options.deleteBindings;
      bindings = $.extend(true, {}, defaultBindings, bindings);
      if (_.isArray(deleteBindings)) {
        _.each(deleteBindings, function deleteEachBinding(key) {
          delete bindings[key];
        });
      }
      var model = options.model;
      delete options.model;
      view.binder.bind(model || view.model, view.el, bindings, options);
    },
    nav: function nav (fragment, options) {
      options = options || {};
      if (options.trigger === undefined) {
        options.trigger = true;
      }
      return Backbone.history.navigate.call(Backbone.history, fragment, options);
    },
    errorResponse: function errorResponseFn(response) {
      var command = 'error:';
      switch (response.status) {
      case 422:
        command += 'invalid';
        break;
      case 404:
        command += 'notfound';
        break;
      case 401:
        command += 'unauthorized';
        break;
      default:
        command += 'unexpected';
        break;
      }
      if (response.responseJSON) {
        Marbles.execute(command, response.status !== 500 ? response.responseJSON.errors : response);
      } else {
        console.error(response.responseText);
      }
    },
    removeArguments: function removeArgumentsFn(api) {
      var obj = {};
      _.each(Object.keys(api), function(key) {
        var value = api[key];
        if (_.isFunction(value)) {
          obj[key] = function () {
            return value.call(api);
          };
        } else {
          obj[key] = value;
        }
      });
      return obj;
    },
    formatCurrency: function formatCurrencyFn(amount, places) {
      amount = (_.isFinite(amount) ? amount : 0) + '';
      amount = amount.split('.').slice(0, 2);
      var hasDigits = amount.length > 1;
      places = _.isFinite(places) ? places : 2;

      if (places > 0) {
        amount[1] = _.string.rpad(hasDigits ? amount[1].substring(places, 0) : '', places, '0');
      } else if (hasDigits) {
        amount.pop();
      }

      return amount.join('.');
    },
    resizeChart: function resizeChartFn(chart, container) {
      resizingCharts.push({
        chart: chart,
        container: container
      });
      chart.width(container.innerWidth());
    }
  };

}());
