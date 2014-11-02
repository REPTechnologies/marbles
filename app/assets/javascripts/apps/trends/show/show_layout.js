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
        'change @ui.timeFrameSelect': 'changeTimeFrame'
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
      }
    });

    Marbles.respond.setHandler('get:time:frame', function() {
      return timeFrame;
    });

  });

}());
