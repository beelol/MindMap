"use strict";

const React = require('react');
const Modal = require('react-modal');

const hashHistory = require('react-router').hashHistory;

const BoardActions = require('../../actions/board_actions');
const BoardStore = require('../../stores/board_store');

const SessionStore = require('../../stores/session_store');

const BoardForm = React.createClass({
  getInitialState () {
    return {
      board:
      {
        name: "",
        description: "",
        ord: 0
      }
    };
  },

  componentDidMount () {
    this.listener = BoardStore.addListener(this.onChange);
  },

  componentWillUnmount () {
    this.listener.remove();
  },

  onChange () {
    // Get the board from the store
    let all = BoardStore.all();
    let keys = Object.keys(all)

    let board = all[keys[keys.length-1]];

    // Display the board
    this.showBoard(board.id);
  },

  handleSubmit(event) {
    event.preventDefault();

    const board = Object.assign({}, this.state.board);

    board.listing_id = this.props.params.listing_id
    board.author_id = SessionStore.currentUser().id

    BoardActions.createBoard(board);
  },

  showBoard(id) {
    hashHistory.push(`/#/listings/${this.props.params.listing_id}/boards/${id}`);
  },

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
                  onChange={this.update("name")} className="board-field-title"/>
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
