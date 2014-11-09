(function () {
  'use strict';

  function lastDayOfMonth(year, month) {
    var d = new Date(year, month, 0);
    return d.getDate();
  }

  function getDays(numDays, lastDay) {
    var days = [];
    for (var i = 0; i < numDays; ++i) {
      days.push(_.string.lpad(_.random(1, lastDay), 2, '0'));
    }
    days.sort();
    return days;
  }

  function pollFactory() {
    var answers = [];
    var foci = _.map(gon.foci, _.clone);
    var time = moment();
    for (var i = 0; i <= 200; ++i) {
      var day = '' + time.date();
      var month = '' + (time.month() + 1);
      var year = '' + time.year();
      _.each(foci, function (focus) {
        var previous = focus.previous || 50;
        var change = _.random(-10, 10);
        var score = Math.max(Math.min(previous + change, 100), 0);
        answers.push({
          date: year + '-' + month + '-' + day,
          focus: focus.name,
          color: focus.color,
          score: score,
          change: change,
          poll: {id: year + month + day} 
        });
        focus.previous = score;
      });
      time.subtract(_.random(1, 3), 'days');
    }
    return answers;
  }

  function eventFactory(year, numMonths) {
    var events = [];
    for (var i = 1; i <= numMonths; ++i) {
      var month = _.string.lpad(i, 2, '0');
      var lastDay = lastDayOfMonth(year, i);
      var numDays = _.random(1, 2 * lastDay / 7);
      var days = getDays(numDays, lastDay);
      for (var j = 0; j < numDays; ++j) {
        var day = days[j];
        var confirmed = !!_.random(0,1);
        events.push({
          id: year + month + day,
          held_on: year + '-' + month + '-' + day,
          primary_focus: _.sample(gon.foci),
          confirmed: confirmed,
          new_org: confirmed && !!_.random(0,1)
        });
      }
    }
    return events;
  }

  Marbles.module('TrendsApp.Show', function (Show, Marbles, Backbone, Marionette, $, _) {
    Show.Controller = Marbles.Controller.extend({
      initialize: function initializeFn() {
        this.pollDataPromise = this.getPollData();
        this.eventDataPromise = this.getEventData();

        this.layout = this.getLayoutView();
        this.listenTo(this.layout, 'show', this.showCharts);
        this.listenTo(this.layout, 'show:summary:tab', this.showSummary);
        this.listenTo(this.layout, 'show:stats:tab', this.showStats);
        this.listenTo(this.layout, 'show:activity:tab', this.showActivity);

        $.when(this.pollDataPromise, this.eventDataPromise)
          .done($.proxy(function (pollData, eventData) {
            this.ndxPoll = crossfilter(pollData.answers);
            this.ndxEvent = crossfilter(eventData.events);

            this.show(this.layout);
          }, this));
      },
      showCharts: function showChartsFn() {
          Marbles.execute('show:foci:line:chart', this.layout.fociLineRegion, this.ndxPoll);  
          this.showSummary();
      },
      showSummary: function showSummaryFn() {
        if (this.currentTab !== 'summary') {
          Marbles.execute('show:trends:summary', this.layout.tabContentRegion, this.ndxPoll, this.ndxEvent);
          this.currentTab = 'summary';
          dc.renderAll();
        }
      },
      showStats: function showStatsFn() {
        if (this.currentTab !== 'stats') {
          Marbles.execute('show:trends:stats', this.layout.tabContentRegion, this.ndxPoll, this.ndxEvent);
          this.currentTab = 'stats';
          dc.renderAll();
        }
      },
      showActivity: function showActivityFn() {
        if (this.currentTab != 'activity') {
          Marbles.execute('show:trends:activity', this.layout.tabContentRegion, this.ndxPoll, this.ndxEvent);
          this.currentTab = 'activity';
          dc.renderAll();
        }
      },
      getLayoutView: function getLayoutViewFn() {
        return new Show.Layout();
      },
      getEventData: function getEventDataFn() {
        var deferred = $.Deferred();
        deferred.resolveWith(this, [{
          events: eventFactory('2014', 9)
        }]);
        deferred.done(this.processEventData);
        return deferred.promise();
      },
      getPollData: function getPollDataFn() {
        var deferred = $.Deferred();
        deferred.resolveWith(this, [{
          answers: pollFactory('2014', 9)
        }]);
        deferred.done(this.processPollData);
        return deferred.promise();
      },
      processEventData: function processEventDataFn(data) {
        data.events.forEach(function (event) {
          event.dd = M.format.date.parse(event.held_on);
          event.month = d3.time.month(event.dd);
          event.day = event.dd.getDay() + '.' + M.format.dayOfWeek(event.dd);
        });
      },
      processPollData: function processPollDataFn(data) {
        var now = moment();
        data.answers.forEach(function (answer) {
          answer.dd = M.format.date.parse(answer.date);
          answer.month = d3.time.month(answer.dd);
          answer.day = answer.dd.getDay() + '.' + M.format.dayOfWeek(answer.dd);
          var days = now.diff(answer.dd, 'days');
          var weight = Math.max(0, 1 - 0.03 * days);
          answer.weightedChange = answer.change * weight;
        });
      }
    });
  });

}());
