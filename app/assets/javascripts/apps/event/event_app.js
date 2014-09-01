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
        return new Date(this.held_at).toLocaleTimeString();
      },
      join_style: function () {
        var baseColor = tinycolor.darken(this.primary_focus.color, 5).toHexString();
        var shadeColor = tinycolor.darken(baseColor, 5).toHexString();
        return 'background-color: ' + baseColor + '; border-color: ' + shadeColor + ';';
      },
      dollar_cost: function () {
        return M.fn.formatCurrency(this.cost || 0);
      },
      articulate_event_type: function () {
        return AvsAnSimple.query(this.event_type) + ' ' + _.str.capitalize(this.event_type);
      },
      scopes_sentence: function() {
        return _.str.toSentenceSerial(_.pluck(this.scopes, 'title'));
      }
    };

    var demux = {
      showEvent: function showEventFn(id) {
        return new EventApp.Show.Controller({id: id});
      }
    };

    Marbles.vent.on('event:show', function () {
      var args = new Args([{id: Args.INT | Args.Required}], arguments);
      M.fn.nav('event/' + args.id);
    });

    Marbles.addInitializer(function () {
      EventApp.router = new EventApp.Router({controller: demux});
    });

    Marbles.commands.setHandler('show:event:list', function (region, events, childViewOptions) {
      return new EventApp.List.Controller({
        region: region,
        events: events,
        childViewOptions: childViewOptions
      });
    });
  });

}());
