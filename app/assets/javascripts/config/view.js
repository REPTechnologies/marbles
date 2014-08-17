(function () {
  'use strict';

  Marionette.ItemView.prototype.serializeData = function serializeDataFn() {
    var data = {};

    if (this.model) {
      if (this.model.toData) {
        data = this.model.toData();
      } else {
        data = this.model.toJSON();
      }
    }
    else if (this.collection) {
      data = {items: this.collection.toJSON()};
    }

    return data;
  };

}());
