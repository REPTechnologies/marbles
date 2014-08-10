(function () {
  'use strict';

  Marbles.module('EventApp', function (EventApp, Marbles, Backbone, Marionette, $, _) {
    EventApp.Router = Marionette.AppRouter.extend({
      appRoutes: {
        'event/:id': 'showEvent'
      }
    });

    EventApp.TemplateHelpers = {
      time: function () {
        return new Date(this.event.held_at).toLocaleTimeString();
      },
      join_style: function () {
        var baseColor = tinycolor.darken(this.event.primary_focus.color, 5).toHexString();
        var shadeColor = tinycolor.darken(baseColor, 5).toHexString();
        return 'background-color: ' + baseColor + '; border-color: ' + shadeColor + ';';
      },
      dollar_cost: function () {
        return M.fn.formatCurrency(this.event.cost || 0);
      },
      organization_path: function () {
        return '/organization/' + this.event.organization_attributes.id;
      }
    };

    Marbles.vent.on('event:show', function (model) {
      M.fn.nav('event/' + model.id);
      EventApp.Show.Controller.showEvent(model.id, model);
    });

    Marbles.addInitializer(function () {
      EventApp.router = new EventApp.Router({
        controller: EventApp.Show.Controller
      });
    });
  });

}());
