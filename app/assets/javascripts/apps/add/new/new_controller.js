/*jslint indent: 2, nomen: true*/
/*global Marbles, M */
(function () {
  "use strict";

  Marbles.module('AddApp.New', function (New, Marbles, Backbone, Marionette, $, _) {

    function getFocusPicker(foci) {
      return new New.Focus.Picker({
        collection: Marbles.request('get:focus:list')
      });
    }

    function getTypePicker() {
      return new New.Type.Picker();
    }

    function getScopePicker() {
      return new New.Scope.Picker();
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
      
    }

    function saveFailure(model, response, options) {
      
    }

    function listenToTriggers(layout) {
      layout.on('event:submit', function () {
        //TODO detect new org
        
        var promise = layout.model.save();
        if (promise) {
          promise.done(saveSuccess);
          promise.fail(saveFailure);
        } else {
          //TODO validations failed
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
