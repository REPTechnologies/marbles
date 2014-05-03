/*jslint indent: 2, nomen: true*/
/*global Marbles */
(function () {
  "use strict";

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

  function initPlugins(view) {
    initTagSelect(view);
  }

  Marbles.module('AddApp.New.Info', function (Info, Marbles, Backbone, Marionette, $, _) {
    Info.View = Marionette.ItemView.extend({
      template: 'add/new/info',
      onRender: initPlugins
    });
  });

}());