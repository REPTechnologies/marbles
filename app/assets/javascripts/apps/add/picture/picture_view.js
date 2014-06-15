/*jslint indent: 2, nomen: true*/
/*global Marbles, dust, Routes */
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

    function uploadProgressFn(picker) {
      return function uploadProgress(e, data) {
        picker.ui.progress.removeClass('hidden');
        var progress = parseInt(data.loaded / data.total * 100, 10);
        picker.ui.progressBar
          .attr('aria-valuenow', progress)
          .css('width', progress + '%');
        picker.ui.progressSpan.text(progress + '% Complete');
      };
    }

    function uploadDoneFn(picker) {
      return function uploadDone(e, data) {
        console.dir(data);
        setTimeout(function hideProgress() {
          picker.ui.progress.addClass('hidden');
        }, 500);
      };
    }

    function uploadFailFn(picker) {
      return function uploadFail(e, data) {
        picker.ui.progress.addClass('hidden');
        picker.ui.fileInput.removeClass('hidden');
        Marbles.commands.execute('error:unexpected');
      };
    }

    function initFileUpload(picker) {
      picker.ui.fileInput.fileupload({
        url: Routes.v1_pictures_path({format: 'json'}),
        dataType: 'json',
        add: addFile,
        progress: uploadProgressFn(picker),
        done: uploadDoneFn(picker),
        fail: uploadFailFn(picker)
      });
    }

    function destroyFileUpload() {
      this.ui.fileInput.fileupload('destroy');
    }

    Picture.View = Marionette.ItemView.extend({
      template: 'add/picture/view'
    });

    Picture.Picker = Marionette.ItemView.extend({
      template: 'add/picture/picker',
      className: 'col-xs-12',
      onRender: initFileUpload,
      onClose: destroyFileUpload,
      ui: {
        fileInput: '#picture-upload',
        progress: '.progress',
        progressBar: '.progress-bar',
        progressSpan: '.progress-bar span'
      }
    });
  });

}());
