/*jslint indent: 2, nomen: true*/
/*global Marbles, dust */
(function () {
  "use strict";

  Marbles.module('AddApp.New.Picture', function (Picture, Marbles, Backbone, Marionette, $, _) {

    var types = /(\.|\/)(gif|jpe?g|png)$/i;

    function addFile(e, data) {
      var file = data.files[0];
      if (types.test(file.type)) {
        data.submit();
      } else {
        Marbles.commands.execute('error:invalid', 'Invalid file type. Only gif, jpg, and png files allowed.');
      }
    }

    function uploadProgress(e, data) {
      var progress = parseInt(data.loaded / data.total * 100, 10);
    }

    function uploadDone(e, data) {
      
    }

    function initFileUpload(picker) {
      picker.$el.find('#picture-upload').fileupload({
        url: 'foo/url.json',
        dataType: 'json',
        add: addFile,
        progress: uploadProgress,
        done: uploadDone
      });
    }

    function destroyFileUpload() {
      this.$el.find('#picture-upload').fileupload('destroy');
    }

    Picture.View = Marionette.ItemView.extend({
      template: 'add/picture/view'
    });

    Picture.Picker = Marionette.ItemView.extend({
      template: 'add/picture/picker',
      className: 'col-xs-12',
      onRender: initFileUpload,
      onClose: destroyFileUpload
    });
  });

}());
