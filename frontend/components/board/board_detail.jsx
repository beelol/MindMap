"use strict";

// React
const React = require('react');
const Modal = require('react-modal');
const ReactDOM = require('react-dom');


// Board Flux
const BoardActions = require('../../actions/board_actions');
const BoardStore = require('../../stores/board_store');

const BoardDetail = React.createClass({

  getInitialState() {
    return {
      board: {
        id: undefined,
        name: "",
        description: ""
      }
    };
  },

  componentDidMount () {
    this.onChangeListener = BoardStore.addListener(this.onBoardChanged);

    this.setState({
      board: BoardStore.find(this.props.params.board_id)
    });

    // this doesn't work because react
    // ReactDOM.findDOMNode(this.refs.nameInput).focus();
  },

  componentWillUnmount () {
    this.onChangeListener.remove();
  },

  update(property) {
    return (e) => {
      let board = this.state.board;
      board[[property]] = e.target.value;

      this.setState({board: board});
    }
  },

  handleTitleExit (e) {
    e.preventDefault();

    let newBoard = this.state.board;
    newBoard.title = e.currentTarget.value;

    BoardActions.editBoard(newBoard);
  },

  // handleTitleKeyPress (e) {
  //   if (e.keyCode === 13) {
  //     this.handleTitleExit(e);
  //   }
  // },

  // onReceivedBoard () {
  //   this.setState({
  //     board: BoardStore.find(this.id)
  //   });
  // },
  //
  onBoardChanged () {
    this.setState({
      board: BoardStore.find(this.props.params.board_id)
    });
  },

  getModalStyles () {
    return {
      overlay: {
        display: "flex",
        WebkitBoxAlign: "start",
        WebkitAlignItems: "flex-start",
        msFlexAlign: "start",
        alignItems: "flex-start",
        backgroundColor: "rgba(0,0,0,.6)",
        height: "100%",
        WebkitBoxPack: "center",
        WebkitJustifyContent: "center",
        msFlexPack: "center",
        justifyContent: "center",
        overflowY: "auto",
        position: "fixed",
        left: 0,
        top: 0,
        width: "100%",
        zIndex: 20
      },
      content: {
        backgroundColor: "#edeff0",
        borderRadius: "3px",
        margin: "3pc 0 5pc",
        overflow: "hidden",
        position: "relative",
        width: "730px",
        left: 0,
        zIndex: 25
      }
    }
  },

  lol () {
    console.log("lol");
  },

  render () {
    // let board = this.state.board;
    //
    // let empty = (board === undefined);
    //
    // let className = (!empty ? "board-detail-container" : "hidden");

    let className = "board-detail-container";

    // in the list
    // Grab every Photobox
    // Grab every textbox
    // shove them into an array
    // grab the names of each object in the array
    // pretend it's polymorphic because js has
    // no goddamn types
    // Do a map here
    // for each item show that board detail list item
    // and then
    return (
      <Modal isOpen={true}
             style={this.getModalStyles()}>
        <div className={className}>
            <div className="board-detail-header">
              <textarea className="board-detail-title"
                        ref="nameInput"
                        value={this.state.board.name}
                        maxLength={30}
                        onBlur={this.handleTitleExit}
                        onChange={this.update("name")}/>

              <div className="board-detail-separator"></div>
            </div>


            <div className="board-detail-list-container">
              <ul className="board-detail-list">
                <li className="board-detail-list-item">Canvas</li>
                <li className="board-detail-list-item">SubBoard</li>
                <li className="board-detail-list-item">Checklist</li>
                <li className="board-detail-list-item">Text Box</li>
                <li className="board-detail-list-item">Photo Box</li>
                <li className="board-detail-list-item">Another Thing</li>
              </ul>
            </div>
        </div>
      </Modal>
    );
  }
});

module.exports = BoardDetail;
