(function () {
  'use strict';

  Marbles.module('TrendsApp.Summary.Metrics', function (Metrics, Marbles, Backbone, Marionette, $, _) {

    Metrics.View = Marionette.ItemView.extend({
      template: 'trends/summary/metrics/view',
      onShow: function onShowFn() {
        this.$el.find('.label').tooltip({
          placement: 'right'
        });
      },
      initialize: function initializeFn(options) {
        this.ndxEvent = options.ndxEvent;
        this.up = options.up;

        this.confirmedDim = this.ndxEvent.dimension(_.property('confirmed'));
        this.countByConfirmed = this.confirmedDim.group().reduceCount();
        this.confirmed = _.reduce(this.countByConfirmed.top(Infinity), this.reduceToObject, {}, this);

        this.newOrgDim = this.ndxEvent.dimension(_.property('new_org'));
        this.countByNewOrg = this.newOrgDim.group().reduceCount();
        this.newOrg = _.reduce(this.countByNewOrg.top(Infinity), this.reduceToObject, {}, this);

        this.model = new Backbone.Model();
        this.model.set('confirmed', this.confirmed.true);
        this.model.set('total', this.confirmed.true + this.confirmed.false);
        var percentConfirmed = 100 * this.confirmed.true / (this.confirmed.true + this.confirmed.false);
        this.model.set('percentConfirmed', '' + Math.floor(percentConfirmed));
        this.model.set('newOrg', this.newOrg.true);
        this.model.set('percentNewOrg', '' + Math.floor(100 * this.newOrg.true / this.confirmed.true));
      },
      reduceToObject: function(memo, obj) {
        memo[obj.key] = obj.value;
        return memo;
      },
      onDestroy: function onDestroyFn() {
        this.newOrgDim.dispose();
        this.countByConfirmed.dispose();
        this.confirmedDim.dispose();
        this.countByNewOrg.dispose();
      }
    });

  });

}());
