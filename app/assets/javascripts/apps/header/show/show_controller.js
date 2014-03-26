Marbles.module('HeaderApp.Show', function (Show, Marbles, Backbone, Marionette, $, _) {
  Show.Controller = {
    showHeader: function () {
      var headerView = this.getHeaderView();
      Marbles.headerRegion.show(headerView);
    },
    getHeaderView: function () {
      return new Show.View();
    }
  };
});
