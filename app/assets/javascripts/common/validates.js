/*jslint indent: 2, nomen: true*/
/*global _, $, Marbles, JST, Backbone, M, Args, gon, resizeFooter */
(function () {
  "use strict";

  if (!Number.isInteger) {
    Number.isInteger = function isInteger(nVal) {
      return typeof nVal === 'number' && isFinite(nVal) && nVal > -9007199254740992 && nVal < 9007199254740992 && Math.floor(nVal) === nVal;
    };
  }

  function validateAttrs(validator) {
    return function validatorFn(errors, attrs) {
      var keys = _.flatten(Array.prototype.slice.call(arguments, 2));
      _.each(keys, function validateEachFn(options) {
        var key = options.key || options,
          error = validator(attrs[key], options);
        if (error) {
          errors.push(_.string.humanize(options.alias || key) + ' ' + (options.message || error));
        }
      });
      return errors;
    };
  }

  M.validates = {
    presence: validateAttrs(function presenceValidator(attr, options) {
      if (attr === undefined) {
        return 'can\'t be blank';
      }
    }),
    numericality: validateAttrs(function numericalityValidator(attr, options) {
      var number = _.string.toNumber(attr, 2);
      if (attr !== undefined && _.isNaN(number)) {
        return 'is not a number';
      }
      if (attr !== undefined && options.only_integer && !Number.isInteger(number)) {
        return 'is not an integer';
      }
    }),
    inclusion: validateAttrs(function inclusionValidator(attr, options) {
      if (attr != undefined && !_.include(options.in, attr)) {
        return 'is not included in the list';
      }
    })
  }
}());