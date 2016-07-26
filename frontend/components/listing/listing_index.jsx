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
    this.setState({
      listings: ListingStore.all()
    });
  },

  onNameWasEdited (newListing) {
    this.setState({[newListing.id]: newListing});
  },

  onNameWasUpdated (newListing) {
    this.setState({[newListing.id]: newListing});

    ListingActions.editListing(newListing);
  },

  // This grabs the updated one from our state
  getCurrentListingName (listing) {
    return (this.state[listing.id] !== undefined ? this.state[listing.id].name : listing.name)
  },

  render () {
    let listingKeys = Object.keys(this.state.listings);

    return(
      <div className="app-container">
        <div className="listing-index-container">
          <div className="listing-index">
            {
              listingKeys.map(key => {
                let listing = this.state.listings[key];
                listing.name = this.getCurrentListingName(listing);

                return (
                  <ListingIndexItem key={listing.id}
                                    listing={listing}
                                    editName={this.onNameWasEdited}
                                    updateName={this.onNameWasUpdated}/>
                );
              })
            }
          </div>
        </div>
        {this.props.children}
      </div>
    );
  }
})

module.exports = ListingIndex;
