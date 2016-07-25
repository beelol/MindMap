

const ApiUtil = {
  // fetchAllPhotoBoxes (filters, success) {
  //   $.get('api/photoBoxes', filters, success);
  // },
  // fetchBoard () {
  //   $.get('api/photoBox/:id', filters, success);
  // },
  // createBoard (data, success) {
  //   $.post('api/photoBoxes', { photoBox: data }, success);
  // },

  fetchAllPhotoBoxes (cb) {
    $.ajax({
      url: "api/photoBoxes",
      success: cb
    });
  },

  fetchBoard (id, cb) {
    $.ajax({
      url: `api/photoBoxes/${id}`,
      success: cb
    });
  },

  deleteBoard (id, cb) {
    $.ajax({
      url: `api/photoBoxes/${id}`,
      method: "DELETE",
      success: cb(id)
    });
  },

  createBoard (newBoard, cb, redirectCb) {
    $.ajax({
      url: "api/photoBoxes",
      method: "POST",
      data: {photoBox: newBoard},
      success: function (photoBox) {
        cb(photoBox, redirectCb);
      }
    });
  },

  updateBoard (photoBox, cb, redirectCb) {
    $.ajax({
      url: `api/photoBoxes/${photoBox.id}`,
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

// let newBoard = {id: 2, title: "nice", photoBox_id: 2, author_id: 2}
//
// $.ajax({
//   url: "api/photoBoxes",
//   method: "POST",
//   data: {photoBox: newBoard},
//   success: function (photoBox) {
//     console.log(photoBox);
//   }
// });
