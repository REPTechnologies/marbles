(function () {
  'use strict';

  Marbles.module('TrendsApp.Show', function (Show, Marbles, Backbone, Marionette, $, _) {

    var timeFrame;

    Show.Layout = Marionette.LayoutView.extend({
      template: 'trends/show/show',
      regions: {
        fociLineRegion: '#foci-line-region',
        tabContentRegion: '#tab-content-region'
      },
      ui: {
        timeFrameSelect: '#time-frame-select'
      },
      events: {
        'change @ui.timeFrameSelect': 'changeTimeFrame',
        /*'click #summary-region-tab': 'showSummaryTab',
        'click #stats-region-tab': 'showStatsTab',
        'click #activity-region-tab': 'showActivityTab'*/
      },
      onShow: function() {
        this.setTimeFrame();
      },
      setTimeFrame: function setTimeFrameFn() {
        var now = moment();
        var days = this.ui.timeFrameSelect.val();
        var begin;
        if (days) {
          begin = moment(now).subtract(+days, 'days')
        } else {
          begin = moment(Marbles.request('get:current:user:join:date'));
        }
        timeFrame = [begin, now];
      },
      changeTimeFrame: function changeTimeFrameFn() {
        this.setTimeFrame();
        Marbles.vent.trigger('time:frame:change', timeFrame);
      },
      activateTab: function activateTabFn(tab) {
        this.$el.find('#stats-nav .active').removeClass('active');
        this.$el.find('#' + tab + '-region-tab').parent().addClass('active');
        this.trigger('show:' + tab + ':tab');
      }/*,
      showSummaryTab: function showSummaryTabFn() {
        this.activateTab('summary');
      },
      showStatsTab: function showStatsTabFn() {
        this.activateTab('stats');
      },
      showActivityTab: function showActivityTabFn() {
        this.activateTab('activity');
      }*/
    });

    Marbles.respond.setHandler('get:time:frame', function() {
      return timeFrame;
    });

  });

}());
