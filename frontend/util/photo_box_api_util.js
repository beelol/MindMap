

const ApiUtil = {
  // fetchAllPhotoBoxes (filters, success) {
  //   $.get('api/photoboxes', filters, success);
  // },
  // fetchPhotoBox () {
  //   $.get('api/photoBox/:id', filters, success);
  // },
  // createPhotoBox (data, success) {
  //   $.post('api/photoboxes', { photoBox: data }, success);
  // },

  fetchAllPhotoBoxes (cb) {
    $.ajax({
      url: "api/photoboxes",
      success: cb
    });
  },

  fetchPhotoBox (id, cb) {
    $.ajax({
      url: `api/photoboxes/${id}`,
      success: cb
    });
  },

  deletePhotoBox (id, cb) {
    $.ajax({
      url: `api/photoboxes/${id}`,
      method: "DELETE",
      success: cb(id)
    });
  },

  createPhotoBox (newPhotoBox, cb, redirectCb) {
    $.ajax({
      url: "api/photoboxes",
      method: "POST",
      data: {photoBox: newPhotoBox},
      success: function (photoBox) {
        cb(photoBox, redirectCb);
      }
    });
  },

  updatePhotoBox (photoBox, cb, redirectCb) {
    $.ajax({
      url: `api/photoboxes/${photoBox.id}`,
      method: "PATCH",
      data: {photoBox: photoBox},
      success: function (photoBox) {
        cb(photoBox, redirectCb);
      }
    });
  }
};

module.exports = ApiUtil;

/* Stuff for testing */

// let newPhotoBox = {id: 2, title: "nice", photoBox_id: 2, author_id: 2}
//
// $.ajax({
//   url: "api/photoboxes",
//   method: "POST",
//   data: {photoBox: newPhotoBox},
//   success: function (photoBox) {
//     console.log(photoBox);
//   }
// });
