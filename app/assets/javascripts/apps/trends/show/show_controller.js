(function () {
  'use strict';

  function randomInRange(lower, upper) {
    return Math.floor((Math.random() * upper) + lower);
  }

  function lastDayOfMonth(year, month) {
    var d = new Date(year, month, 0);
    return d.getDate();
  }

  function pollFactory(year, months, days) {
    var answers = [];
    for (var i = 1; i <= months; ++i) {
      var month = _.string.lpad(i, 2, '0');
      for (var j = 0; j < days; ++j) {
        var lastDay = lastDayOfMonth(year, i);
        var day = _.string.lpad(randomInRange(1, lastDay), 2, '0');
        _.each(gon.foci, function (focus) {
          answers.push({
            date: year + '-' + month + '-' + day,
            focus: focus.name,
            color: focus.color,
            score: randomInRange(0, 100)
          });
        });
      }
    }
    return answers;
  }

  Marbles.module('TrendsApp.Show', function (Show, Marbles, Backbone, Marionette, $, _) {
    Show.Controller = Marbles.Controller.extend({
      initialize: function initializeFn() {
        this.pollDataPromise = this.getPollData();
        this.eventDataPromise = this.getEventData();

        this.layout = this.getLayoutView();
        this.listenTo(this.layout, 'show', this.showCharts);

        this.show(this.layout);
      },
      showCharts: function showChartsFn() {
        $.when(this.pollDataPromise, this.eventDataPromise).done($.proxy(function (pollData, eventData) {
          var ndxPoll = crossfilter(pollData.answers);
          var ndxEvent = crossfilter(eventData.events);

          Marbles.execute('show:foci:line:chart', this.layout.fociLineRegion, ndxPoll);
          Marbles.execute('show:trends:summary', this.layout.tabContentRegion, ndxPoll, ndxEvent);
          dc.renderAll();
        }, this));
      },
      getLayoutView: function getLayoutViewFn() {
        return new Show.Layout();
      },
      getEventData: function getEventDataFn() {
        var deferred = $.Deferred();
        deferred.resolveWith(this, [{
          events: [
            {id: 1, date: '2014-07-04'}
          ]
        }]);
        deferred.done(this.processEventData);
        return deferred.promise();
      },
      getPollData: function getPollDataFn() {
        var deferred = $.Deferred();
        deferred.resolveWith(this, [{
          answers: pollFactory('2014', 8, 10)
        }]);
        deferred.done(this.processPollData);
        return deferred.promise();
      },
      processEventData: function processEventDataFn(data) {
        data.events.forEach(function (event) {
          event.dd = M.format.date.parse(event.date);
          event.month = d3.time.month(event.dd);
        });
      },
      processPollData: function processPollDataFn(data) {
        data.answers.forEach(function (answer) {
          answer.dd = M.format.date.parse(answer.date);
          answer.month = d3.time.month(answer.dd);
        });
      }
    });
  });

}());
