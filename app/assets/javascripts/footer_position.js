/*jslint indent: 2, nomen: true*/
/*global $ */
(function () {
  "use strict";

  $(function () {
    var $window = $(window),
      $page = $('#page'),
      $footerRegion = $('#footer-region'),
      $fakeFooter = $('#fake-footer');

    window.setFooterPosition = function setFooterPosition() {
      $footerRegion.css('position', $page.height() < $window.height() ? 'fixed' : 'absolute');
      $footerRegion.css('display', 'block');
    }

    function setFakeFooterHeight() {
      $fakeFooter.height($footerRegion.height());
    }

    function windowResize() {
      setFooterPosition();
      setFakeFooterHeight();
    }

    windowResize();
    $window.resize(windowResize);
  });

}());