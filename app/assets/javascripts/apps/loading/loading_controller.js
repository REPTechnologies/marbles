(function () {
  'use strict';

  Marbles.module('Loading', function (Loading, Marbles, Backbone, Marionette, $, _) {

    Loading.Controller = Marbles.Controller.extend({
      initialize: function (options) {
        var realView = options.view,
          config = options.config;

        _.defaults(config, {
          entities: this.getEntities(realView)
        });

        this.show(this.getLoadingView());
        this.showRealView(realView, config);
      },
      getEntities: function (view) {
        return _.chain(view).pick('model', 'collection').toArray().compact().value();
      },
      getLoadingView: function () {
        return new Loading.View();
      },
      showRealView: function (realView, config) {
        Marbles.execute('when:fetched', config.entities, _.bind(this.show, this, realView));
      }
    });

    Marbles.commands.setHandler('show:loading', function (view, options) {
      new Loading.Controller({
        view: view,
        region: options.region,
        config: _.isObject(options.loading) ? options.loading : {}
      });
    });

  });

}());
