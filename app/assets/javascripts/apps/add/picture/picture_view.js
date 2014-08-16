(function () {
  'use strict';

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

    function setProgressPercent(picker, percent) {
      picker.ui.progressBar
        .attr('aria-valuenow', percent)
        .animate({'width': percent + '%'});
      picker.ui.progressSpan.text(percent + '% Complete');
    }

    function uploadProgressFn(picker) {
      return function uploadProgress(e, data) {
        picker.ui.progress.removeClass('hidden');
        setProgressPercent(picker, parseInt(data.loaded / data.total * 100, 10));
      };
    }

    function uploadDoneFn(picker) {
      return function uploadDone(e, data) {
        picker.ui.progress.addClass('hidden');
        setProgressPercent(picker, 0);
        picker.ui.thumbnail.attr('src', data.result.thumb_url);
        picker.ui.thumbnailLink
          .attr('href', data.result.url)
          .removeClass('hidden');
        picker.trigger('picture:add', data.result.id);
      };
    }

    function uploadFailFn(picker) {
      return function uploadFail(e, data) {
        picker.ui.progress.addClass('hidden');
        picker.ui.fileInput.removeClass('hidden');
        M.fn.errorResponse(data.jqXHR);
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

    function clickUpload() {
      this.ui.fileInput.click();
    }

    Picture.View = Marionette.ItemView.extend({
      template: 'add/picture/view'
    });

    Picture.Picker = Marionette.ItemView.extend({
      template: 'add/picture/picker',
      className: 'col-xs-12',
      onRender: initFileUpload,
      ui: {
        fileInput: '#picture-upload',
        uploadButton: '#picture-upload-btn',
        progress: '.progress',
        progressBar: '.progress-bar',
        progressSpan: '.progress-bar span',
        thumbnailLink: '#thumbnail-link',
        thumbnail: '.img-thumbnail'
      },
      events: {
        'click @ui.uploadButton': clickUpload
      }
    });
  });

}());
