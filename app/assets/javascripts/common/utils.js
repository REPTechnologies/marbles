/*jslint indent: 2, nomen: true*/
/*global _, $, Marbles, Backbone, M, Args */
(function () {
  "use strict";

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
      view.binder.bind(view.model, view.el, bindings, options);
    },
    nav: Backbone.history.navigate.bind(Backbone.history),
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
      Marbles.execute(command, response.status !== 500 ? response.responseJSON.errors : response);
    },
    removeArguments: function(api) {
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
    }
  };

}());
