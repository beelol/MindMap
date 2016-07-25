

const ApiUtil = {
  // fetchAllTextBoxes (filters, success) {
  //   $.get('api/textBoxes', filters, success);
  // },
  // fetchBoard () {
  //   $.get('api/textBox/:id', filters, success);
  // },
  // createBoard (data, success) {
  //   $.post('api/textBoxes', { textBox: data }, success);
  // },

  fetchAllTextBoxes (cb) {
    $.ajax({
      url: "api/textBoxes",
      success: cb
    });
  },

  fetchBoard (id, cb) {
    $.ajax({
      url: `api/textBoxes/${id}`,
      success: cb
    });
  },

  deleteBoard (id, cb) {
    $.ajax({
      url: `api/textBoxes/${id}`,
      method: "DELETE",
      success: cb(id)
    });
  },

  createBoard (newBoard, cb, redirectCb) {
    $.ajax({
      url: "api/textBoxes",
      method: "POST",
      data: {textBox: newBoard},
      success: function (textBox) {
        cb(textBox, redirectCb);
      }
    });
  },

  updateBoard (textBox, cb, redirectCb) {
    $.ajax({
      url: `api/textBoxes/${textBox.id}`,
      method: "PATCH",
      data: {textBox: textBox},
      success: function (textBox) {
        cb(textBox, redirectCb);
      }
    });
  }
};

module.exports = ApiUtil;

/* Stuff for testing */

// let newBoard = {id: 2, title: "nice", textBox_id: 2, author_id: 2}
//
// $.ajax({
//   url: "api/textBoxes",
//   method: "POST",
//   data: {textBox: newBoard},
//   success: function (textBox) {
//     console.log(textBox);
//   }
// });
