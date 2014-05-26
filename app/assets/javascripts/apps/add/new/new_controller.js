/*jslint indent: 2, nomen: true*/
/*global Marbles, M */
(function () {
  "use strict";

  Marbles.module('AddApp.New', function (New, Marbles, Backbone, Marionette, $, _) {

    function getFocusPicker() {
      return new New.Focus.Picker({
        collection: Marbles.request('get:focus:list')
      });
    }

    function getTypePicker() {
      return new New.Type.Picker({
        collection: Marbles.request('get:event:type:list')
      });
    }

    function getScopePicker() {
      return new New.Scope.Picker({
        collection: Marbles.request('get:scope:list')
      });
    }

    function getInfoView() {
      return new New.Info.View();
    }

    function getDetailsView() {
      return new New.Details.View();
    }

    function addViewsToLayout(layout) {
      layout.focusRegion.show(getFocusPicker());
      layout.eventTypeRegion.show(getTypePicker());
      layout.eventScopeRegion.show(getScopePicker());
      layout.eventInfoRegion.show(getInfoView());
      layout.eventDetailsRegion.show(getDetailsView());
    }

    function saveSuccess(model, response, options) {
      Marbles.vent.trigger('event:show', model);
    }

    function saveFailure(model, response, options) {
      M.fn.errorResponse(response);
    }

    function listenToTriggers(layout) {
      layout.on('event:submit', function () {
        console.warn('TODO: detect new org');
        
        var valid = layout.model.save({}, {
          success: saveSuccess,
          error: saveFailure
        });

        if (!valid) {
          Marbles.commands.execute('error:invalid', layout.model.validationError);
        }
      });
    }

    function onShow(layout) {
      addViewsToLayout(layout);
      listenToTriggers(layout);
      M.fn.bindModel(layout);
    }

    New.Controller = {
      showNew: function () {
        Marbles.mainRegion.show(M.fn.getLayout(New, onShow, new Marbles.Entities.Event()));
      }
    };
  });

}());
