(function () {
  'use strict';

  Marbles.module('Controllers', function (Controllers, Marbles, Backbone, Marionette, $, _) {

    Marbles.Controller = Marionette.Controller.extend({
      constructor: function controllerConstructor(options) {
        options = options || {};
        this.region = options.region || Marbles.request('default:region');
        this._instance_id = _.uniqueId('controller');
        Marbles.execute('register:instance', this, this._instance_id);
        Marbles.Controller.__super__.constructor.apply(this, arguments);
      },
      close: function closeController() {
        Marbles.execute('unregister:instance', this, this._instance_id);
        Marbles.Controller.__super__.close.apply(this, arguments);
      },
      show: function showView(view) {
        this.listenTo(view, 'close', this.close);
        this.region.show(view);
      }
    });

  });

}());
