/*jslint indent: 2, nomen: true*/
/*global Marbles */
(function () {
  "use strict";
  
  Marbles.module('FooterApp.Show', function (Show, Marbles, Backbone, Marionette, $, _) {
    Show.Controller = {
      showFooter: function () {
        var footerView = this.getFooterView();
        Marbles.footerRegion.show(footerView);
      },
      getFooterView: function () {
        return new Show.View();
      }
    };
  });

}());
