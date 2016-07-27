const Store = require('flux/utils').Store;
const BoardConstants = require('../constants/board_constants');
const AppDispatcher = require('../dispatcher/dispatcher');

const BoardStore = new Store(AppDispatcher);

let _boards = {};

BoardStore.currentBoard = undefined;

BoardStore.all = function () {
  return Object.assign({}, _boards);
};

BoardStore.find = function (id) {
  return Object.assign({}, _boards[id]);
};

BoardStore.findByListing = function (listing_id) {
  let boards = [];

  Object.keys(_boards).forEach((key) => {
    let newKey = parseInt(key);

    if (_boards[newKey].listing_id === listing_id) {
      boards.push(_boards[key]);
    }
  });

  return boards;
};

function resetAllBoards (boards) {
  boards.forEach((board) => {
    _boards[board.id] = board;
  });

  BoardStore.__emitChange();
}

function resetSingleBoard (board) {
  _boards[board.id] = board;
  BoardStore.__emitChange();
}

function removeBoard (id) {
  delete _boards[id];

  BoardStore.__emitChange();
}

BoardStore.__onDispatch = function(payload) {
  switch (payload.actionType) {
    case BoardConstants.BOARDS_RECEIVED:
      resetAllBoards(payload.boards);
      break;
    case BoardConstants.BOARD_RECEIVED:
      resetSingleBoard(payload.board);
      break;
    case BoardConstants.BOARD_REMOVED:
      removeBoard(payload.id);
      break;
  }
};

module.exports = BoardStore;
