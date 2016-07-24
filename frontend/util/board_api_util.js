

const ApiUtil = {
  // fetchAllBoards (filters, success) {
  //   $.get('api/boards', filters, success);
  // },
  // fetchBoard () {
  //   $.get('api/board/:id', filters, success);
  // },
  // createBoard (data, success) {
  //   $.post('api/boards', { board: data }, success);
  // },

  fetchAllBoards (cb) {
    $.ajax({
      url: "api/boards",
      success: cb
    });
  },

  fetchBoard (id, cb) {
    $.ajax({
      url: `api/boards/${id}`,
      success: cb
    });
  },

  deleteBoard (id, cb) {
    $.ajax({
      url: `api/boards/${id}`,
      method: "DELETE",
      success: cb(id)
    });
  },

  createBoard (newBoard, cb, redirectCb) {
    $.ajax({
      url: "api/boards",
      method: "POST",
      data: {board: newBoard},
      success: function (board) {
        cb(board, redirectCb);
      }
    });
  },

  updateBoard (board, cb, redirectCb) {
    $.ajax({
      url: `api/boards/${board.id}`,
      method: "PATCH",
      data: {board: board},
      success: function (board) {
        cb(board, redirectCb);
      }
    });
  }
};

module.exports = ApiUtil;

/* Stuff for testing */

// let newBoard = {id: 2, title: "nice", board_id: 2, author_id: 2}
//
// $.ajax({
//   url: "api/boards",
//   method: "POST",
//   data: {board: newBoard},
//   success: function (board) {
//     console.log(board);
//   }
// });
