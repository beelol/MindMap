"use strict";

const React = require('react');
// const BoardActions = require('../../actions/board_actions');
// const BoardStore = require('../../stores/board_store');
const hashHistory = require('react-router').hashHistory;
const Modal = require('react-modal');

const SessionStore = require('../../stores/session_store');

const BoardForm = React.createClass({
  getInitialState () {
    return {
      board:
      {
        title: "",
        description: "",
        listing_id: 1
      }
    };
  },
  // componentDidMount () {
  //   this.listener = BoardStore.addListener(this.onChange);
  // },
  //
  // componentWillUnmount () {
  //   this.listener.remove();
  // },

  onChange () {
    // Get the board from the store
    let all = BoardStore.all();
    let keys = Object.keys(all)

    this.setState({
      boardId: all[keys.length].id
    })

    let board = all[keys.length];

    BoardStore.currentBoard = board;

    // // Display the board
    // this.showBoard(board.id);
  },

  handleSubmit(event) {
    event.preventDefault();

    const board = Object.assign({}, this.state.board);

    // if (TeamStore.currentTeam) board.team_id = TeamStore.currentTeam.id

    BoardActions.createBoard(board);
  },

  // showBoard(id) {
  //   hashHistory.push("/boards/" + id);
  // },

  handleCancel(event) {
    event.preventDefault();
    hashHistory.goBack();
  },

  update(property) {
    return (e) => {
      let board = this.state.board;
      board[[property]] = e.target.value;

      this.setState({board: board});
    }
  },

  render() {
    var modalStyles = {
      overlay: {
        display: 'flex',
        position: "absolute",
        alignItems: 'center',
        zIndex: 1000,
      },
      content: {
        borderRadius: "3px",
        backgroundColor: "#edeff0",
        // margin: "3pc 0 5pc",
        zIndex: 25
      }
    };

    return (
      <Modal isOpen={true}
             style={modalStyles}>
        <div className="new-board-container">
          <div className="new-board-form">
            <h3 className="new-board-title">Create A Board!</h3>

            <form onSubmit={this.handleSubmit}>
              <div className='board-form-div'>
                <label className="board-title">Title</label>
                <input type="text" value={this.state.board.title}
                  onChange={this.update("title")} className="board-field-title"/>
              </div>

              <div className='board-form-div'>
                <label className="board-description">Description</label>
                <input type="text" value={this.state.board.description}
                  onChange={this.update("description")} className="board-field"/>
              </div>

              <div className="button-holder">
                <input type="submit" value="Create Board" className="new-board-button"/>
              </div>
            </form>

            <div className="button-holder">
              <button className="new-board-button" onClick={this.handleCancel}>Cancel</button>
            </div>
          </div>
        </div>
      </Modal>
    );
  }
});

module.exports = BoardForm;
