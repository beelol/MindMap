const React = require('react');
const ListingIndexItem = require('./listing_index_item');

const ListingStore = require('../../stores/listing_store');
const ListingActions = require('../../actions/listing_actions');

const ListingIndex = React.createClass({
  getInitialState () {
    return {
      listings: []
    };
  },

  componentDidMount () {
    this.onListingsChangedListener = ListingStore.addListener(this.onListingsChanged);

    ListingActions.fetchAllListings();
  },

  componentWillUnmount () {
    this.onListingsChangedListener.remove();
  },

  onListingsChanged() {
    console.log(ListingStore.all());

    this.setState({
      listings: ListingStore.all()
    });
  },

  render () {
    return(
      <div className="app-container">
        <div className="listing-index-container">
          <div className="listing-index">
            <ListingIndexItem />
            <ListingIndexItem />
          </div>
        </div>
        {this.props.children}
      </div>
    );
  }
})

module.exports = ListingIndex;
