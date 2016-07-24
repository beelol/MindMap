const AppDispatcher = require('../dispatcher/dispatcher');
const BoardConstants = require('../constants/board_constants');
const BoardApiUtil = require('../util/board_api_util');

const BoardActions = {
  // fetchAllBoards (filters) {
  //   BoardApiUtil.fetchAllBoards(filters, BoardActions.receiveAllBoards);
  // },
  // fetchBoard (filters) {
  //   BoardApiUtil.fetchBoards(filters, BoardActions.receiveAllBoards);
  // },
  // createBoard (board) {
  //   BoardApiUtil.createBoard(board, BoardActions.receiveSingleBoard);
  // },

  fetchAllBoards () {
    BoardApiUtil.fetchAllBoards(BoardActions.receiveAllBoards);
  },

  fetchBoard (id) {
    BoardApiUtil.fetchBoard(id, BoardActions.receiveBoard);
  },

  createBoard (board) {
    BoardApiUtil.createBoard(board, BoardActions.receiveSingleBoard);
  },

  deleteBoard(id) {
    BoardApiUtil.deleteBoard(id, BoardActions.removeBoard);
  },

  editBoard(board){
    BoardApiUtil.updateBoard(board, BoardActions.updateBoard);
  },

  removeBoard (id) {
    AppDispatcher.dispatch({
      actionType: BoardConstants.BOARD_REMOVED,
      id: id
    });
  },

  updateBoard (board) {
    AppDispatcher.dispatch({
      actionType: BoardConstants.BOARD_RECEIVED,
      board: board
    });
  },

  receiveAllBoards(boards) {
    AppDispatcher.dispatch({
      actionType: BoardConstants.BOARDS_RECEIVED,
      boards: boards
    });
  },

  receiveSingleBoard (board) {
    AppDispatcher.dispatch({
      actionType: BoardConstants.BOARD_RECEIVED,
      board: board
    });
  }
};

module.exports = BoardActions;
