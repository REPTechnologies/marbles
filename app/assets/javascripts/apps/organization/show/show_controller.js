(function () {
  'use strict';

  Marbles.module('OrganizationApp.Show', function (Show, Marbles, Backbone, Marionette, $, _) {

    Show.Controller = Marbles.Controller.extend({
      initialize: function (options) {
        var id = options.id;
        var organization = options.organization || Marbles.request('get:organization', id);

        this.layout = this.getLayoutView(organization);
        this.listenTo(this.layout, 'show', function () {
          this.showNestedEvents(this.layout.upcomingEventsRegion, organization.get('upcoming_events'));
          this.showNestedEvents(this.layout.recentEventsRegion, organization.get('recent_events'));
        });

        this.show(this.layout, {loading: true});
      },
      getLayoutView: function getLayoutViewFn(organization) {
        return new Show.Layout({model: organization});
      },
      showNestedEvents: function showNestedEventsFn(region, eventsData) {
        Marbles.execute('show:event:list', region, Marbles.request('get:event:list', eventsData), {className: 'event col-xs-6'});
      }
    });

  });

}());
