/*jslint indent: 2, nomen: true*/
/*global Marbles */
(function () {
  "use strict";

  Marbles.module('AddApp.New.Info', function (Info, Marbles, Backbone, Marionette, $, _) {

    function getTagParams(term, page, context) {
      return {
        term: term//, page: page
      };
    }

    function formatTagResults(data, page, context) {
      return {
        more: false,
        results: data.results
      };
    }

    function formatNewChoice(term) {
      return {
        text: term
      };
    }

    function initTagSelect(view) {
      view.$el.find('#event-tags').select2({
        tags: [],
        minimumInputLength: 1,
        maximumInputLength: 16,
        id: 'text',
        ajax: {
          url: Routes.v1_tags_path(),
          dataType: 'json',
          data: getTagParams,
          results: formatTagResults
        },
        createSearchChoice: formatNewChoice,
        tokenSeparators: [',', ' ']
      });
    }

    function getOrganizationPicker(currentUser) {
      return new Marbles.AddApp.New.Organization.Picker({model: currentUser});
    }

    function onRender(view) {
      initTagSelect(view);
      view.eventOrganizationRegion.show(getOrganizationPicker(Marbles.request('get:current:user')));
    }

    Info.View = Marionette.Layout.extend({
      template: 'add/new/info',
      onRender: onRender,
      regions: {
        eventOrganizationRegion: '#event-organization-region'
      }
    });
  });

}());