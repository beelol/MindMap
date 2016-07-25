"use strict";

const React = require('react');
const Modal = require('react-modal');
// const BoardActions = require('../../actions/board_actions');
// const BoardStore = require('../../stores/board_store');

const BoardDetail = React.createClass({

  getInitialState() {
    return {
      board: {
        id: undefined,
        title: "title",
        description: ""
        // tasks: TaskStore.findByBoard(this.props.params.id)
      }
    };
  },

  // componentDidMount () {
  //   this.onChangeListener = BoardStore.addListener(this.onBoardChanged);
  //
  //   // Find the board from the params
  //   this.boardId = this.props.params.id;
  //   this.board = BoardStore.find(this.boardId);
  // },
  //
  // componentWillUnmount () {
  //   this.onChangeListener.remove();
  // },

  update(property) {
    return (e) => {
      let board = this.state.board;
      board[[property]] = e.target.value;

      this.setState({board: board});
    }
  },

  // setDescription (e) {
  //   let newBoard = this.state.board;
  //   newBoard.description = e.currentTarget.value;
  //
  //   this.setState({board: newBoard});
  // },

  // handleDescriptionExit (e) {
  //   let newBoard = this.state.board;
  //   newBoard.description = e.currentTarget.value;
  //
  //   BoardActions.editBoard(newBoard);
  // },
  //
  // handleTitleExit (e) {
  //   let newBoard = this.props.board;
  //   newBoard.title = e.currentTarget.value;
  //
  //   this.props.onUpdateBoard(newBoard);
  // },

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
  // onBoardChanged () {
  //   this.setState({
  //     board: BoardStore.find(this.state.board.id)
  //   });
  // },

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

    return (
      <Modal isOpen={true}
             style={this.getModalStyles()}>
        <div className={className}>
            <div className="board-detail-header">
              <textarea className="board-detail-title"
                        value={this.state.board.title}
                        onChange={this.update("title")}/>


            </div>
        </div>
      </Modal>
    );
  }
});

module.exports = BoardDetail;
