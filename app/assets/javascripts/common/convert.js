/*jslint indent: 2, nomen: true*/
/*global _, $, Marbles, JST, Backbone, M, Args, gon, resizeFooter */
(function () {
  "use strict";

  var timezoneOffset = new Date().getTimezoneOffset() / 60,
    isOffsetNegative = timezoneOffset < 0;
  timezoneOffset = (isOffsetNegative ? '-' : '+') + _.string.pad(Math.abs(timezoneOffset), 2, '0');

  function parseTime(time) {
    return moment('2000-01-01T' + time + ':00.000' + timezoneOffset).toISOString();
  }

  function formatTime(time) {
    if (time === undefined) {
      return time;
    }
    return moment(time).format('H:mm');
  }

  function convertValue(modelToView, viewToModel) {
    return function directionConverter() {
      return (arguments[0] === 'ModelToView' ? modelToView : viewToModel).apply(this, Array.prototype.slice.call(arguments, 1));
    };
  }

  M.convert = {
    time: convertValue(formatTime, parseTime)
  };

}());