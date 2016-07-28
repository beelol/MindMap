

const ApiUtil = {
  // fetchAllTextBoxes (filters, success) {
  //   $.get('api/textboxes', filters, success);
  // },
  // fetchTextBox () {
  //   $.get('api/textBox/:id', filters, success);
  // },
  // createTextBox (data, success) {
  //   $.post('api/textboxes', { textBox: data }, success);
  // },

  fetchAllTextBoxes (cb) {
    $.ajax({
      url: "api/textboxes",
      success: cb
    });
  },

  fetchTextBox (id, cb) {
    $.ajax({
      url: `api/textboxes/${id}`,
      success: cb
    });
  },

  deleteTextBox (id, cb) {
    $.ajax({
      url: `api/textboxes/${id}`,
      method: "DELETE",
      success: cb(id)
    });
  },

  createTextBox (newTextBox, cb, redirectCb) {
    $.ajax({
      url: "api/textboxes",
      method: "POST",
      data: {textBox: newTextBox},
      success: function (textBox) {
        cb(textBox, redirectCb);
      }
    });
  },

  updateTextBox (textBox, cb, redirectCb) {
    $.ajax({
      url: `api/textboxes/${textBox.id}`,
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

// let newTextBox = {id: 2, title: "nice", textBox_id: 2, author_id: 2}
//
// $.ajax({
//   url: "api/textboxes",
//   method: "POST",
//   data: {textBox: newTextBox},
//   success: function (textBox) {
//     console.log(textBox);
//   }
// });
