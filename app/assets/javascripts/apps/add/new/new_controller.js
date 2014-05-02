/*jslint indent: 2, nomen: true*/
/*global Marbles */
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

    function addViewsToLayout() {
      this.focusRegion.show(getFocusPicker());
      this.eventTypeRegion.show(getTypePicker());
      this.eventScopeRegion.show(getScopePicker());
      this.eventInfoRegion.show(getInfoView());
      this.eventDetailsRegion.show(getDetailsView());
    }

    New.Controller = {
      showNew: function () {
        Marbles.mainRegion.show(M.fn.getLayout(New, addViewsToLayout));
      }
    };
  });

}());
