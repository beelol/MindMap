const React = require('react');

const SublistingIndexItem = require('./sublisting_index_item');

const BoardStore = require('../../stores/board_store');
const BoardActions = require('../../actions/board_actions');

const SublistingIndex = React.createClass({
  getInitialState () {
    return {
      sublistings: []
    };
  },

  componentDidMount () {
    this.onBoardsChangedListener = BoardStore.addListener(this.onBoardsChanged);

    BoardActions.fetchAllBoards();
  },

  componentWillUnmount () {
    this.onBoardsChangedListener.remove();
  },

  onBoardsChanged() {
    this.setState({
      sublistings: BoardStore.findByListing(this.props.listing.id)
    });
  },

  render () {
    let sublistingKeys = Object.keys(this.state.sublistings);

    return(
      <div className="sublisting-index">
        {
          sublistingKeys.map(key => {
            let sublisting = this.state.sublistings[key];

            return (
              <SublistingIndexItem key={sublisting.id}
                                   listing={this.props.listing}
                                   sublisting={sublisting}/>
            );
          })
        }
      </div>
    );
  }
});

module.exports = SublistingIndex;
