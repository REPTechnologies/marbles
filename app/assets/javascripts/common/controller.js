(function () {
  'use strict';

  Marbles.Controller = Marionette.Controller.extend({
    constructor: function controllerConstructor(options) {
      options = options || {};
      this.region = options.region || Marbles.request('default:region');
      this._instance_id = _.uniqueId('controller');
      Marbles.execute('register:instance', this, this._instance_id);
      Marbles.Controller.__super__.constructor.apply(this, arguments);
    },
    destroy: function destroyController() {
      Marbles.execute('unregister:instance', this, this._instance_id);
      Marbles.Controller.__super__.destroy.apply(this, arguments);
    },
    show: function showView(view, options) {
      options = options || {};
      _.defaults(options, {
        loading: false,
        region: this.region
      });
      this._setMainView(view);
      this._manageView(view, options);
    },
    _manageView: function manageView(view, options) {
      if (options.loading) {
        Marbles.execute('show:loading', view, options);
      } else {
        options.region.show(view);
      }
    },
    _setMainView: function setMainView(view) {
      if (this._mainView) {
        return;
      }
      this._mainView = view;
      this.listenTo(view, 'destroy', this.destroy);
    }
  });

}());
