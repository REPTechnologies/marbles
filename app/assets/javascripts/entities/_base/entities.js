(function () {
  'use strict';

  Marbles.module('Entities', function (Entities, Marbles, Backbone, Marionette, $, _) {

    Backbone.Relational.store.addModelScope(Entities);

    Marbles.commands.setHandler('when:fetched', function (entities, callback) {
      var promises = _.chain([entities]).flatten().pluck('_fetch').value();
      $.when.apply($, promises).done(callback).done(setFooterPosition);
    });

    function nestedToData(data) {
      if (!_.isObject(data) && !_.isArray(data)) {
        return data;
      }

      _.each(data, function (value, key) {
        if (_.isObject(value)) {
          if (_.isFunction(value.toData)) {
            value = value.toData();
          } else if(_.isFunction(value.toJSON)) {
            value = value.toJSON();
          }
          data[key] = nestedToData(value);
        }
      });
      return data;
    }

    Marbles.RelationalModel = Backbone.RelationalModel.extend({
      toData: function toDataFn() {
        var data = Backbone.Model.prototype.toJSON.apply(this, arguments);
        data = nestedToData(data);
        return data;
      }
    });

  });

}());
