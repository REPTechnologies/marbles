(function () {
  'use strict';

  var sync = Backbone.sync;

  function toData(model, options) {
    return JSON.stringify(options.attrs || model.toJSON(options));
  }

  Backbone.sync = function syncRails(method, model, options) {
    // Serialize data, optionally using paramRoot
    if (!options.data && model && (method === 'create' || method === 'update' || method === 'patch')) {
      options.contentType = 'application/json';
      var data = {};
      if (model.paramRoot) {
        data[model.paramRoot] = JSON.parse(toData(model, options));
        options.data = JSON.stringify(data);
      } else {
        options.data = toData(model, options);
      }
    }

    var promise = sync(method, model, options);
    if (!model._fetch && method === 'read') {
      model._fetch = promise;
    }
    return promise;
  };

}());
