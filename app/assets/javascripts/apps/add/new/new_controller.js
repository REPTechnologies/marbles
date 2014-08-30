(function () {
  'use strict';

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

    function getScopePicker(event) {
      var picker = new New.Scope.Picker({
        collection: Marbles.request('get:scope:list')
      });
      picker.on('childview:scope:add', function (scope) {
        event.get('scopes').add(scope.model);
      });
      picker.on('childview:scope:remove', function (scope) {
        event.get('scopes').remove(scope.model);
      });
      return picker;
    }

    function getInfoView() {
      return new New.Info.View();
    }

    function getDetailsView() {
      return new New.Details.View();
    }

    function getPicturePicker(event) {
      var picker = new New.Picture.Picker();
      picker.on('picture:add', function (id) {
        event.set('picture_id', id);
      });
      return picker;
    }

    function addViewsToLayout(layout) {
      layout.focusRegion.show(getFocusPicker());
      layout.eventTypeRegion.show(getTypePicker());
      layout.eventScopeRegion.show(getScopePicker(layout.model));
      layout.eventInfoRegion.show(getInfoView());
      layout.eventDetailsRegion.show(getDetailsView());
      layout.eventPictureRegion.show(getPicturePicker(layout.model));
    }

    function saveSuccess(model, response, options) {
      Marbles.vent.trigger('event:show', model);
    }

    function saveFailure(model, response, options) {
      M.fn.errorResponse(response);
    }

    function listenToTriggers(layout) {
      layout.on('event:submit', function () {
        var valid = layout.model.save({}, {
          success: saveSuccess,
          error: saveFailure
        });

        if (!valid) {
          Marbles.commands.execute('error:invalid', layout.model.validationError);
        }
      });
    }

    function bindModels(layout) {
      M.fn.bindModel(layout, {
        held_at: {converter: M.convert.time}
      }, {deleteBindings: ['organizationName', 'organizationId']});
      layout.organizationBinder = new Backbone.ModelBinder();
      if (!layout.model.get('organization')) {
        layout.model.set('organization', new Marbles.Entities.Organization());
      }
      layout.organizationBinder.bind(layout.model.get('organization'), layout.$el.find('#event-organization-region'), {
        name: '[name="organizationName"]',
        id: '[name="organizationId"]'
      });
    }

    New.Controller = Marbles.Controller.extend({
      initialize: function initializeFn() {
        var event = Marbles.request('new:event');

        this.layout = this.getLayoutView(event);
        this.listenTo(this.layout, 'show', function showFn() {
          addViewsToLayout(this.layout);
          bindModels(this.layout);
          listenToTriggers(this.layout);
        });

        this.show(this.layout);
      },
      getLayoutView: function getLayoutViewFn(event) {
        return new New.Layout({model: event});
      }
    });
  });

}());
