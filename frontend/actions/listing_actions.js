const AppDispatcher = require('../dispatcher/dispatcher');
const ListingConstants = require('../constants/listing_constants');
const ListingApiUtil = require('../util/listing_api_util');

const ListingActions = {
  // fetchAllListings (filters) {
  //   ListingApiUtil.fetchAllListings(filters, ListingActions.receiveAllListings);
  // },
  // fetchListing (filters) {
  //   ListingApiUtil.fetchListings(filters, ListingActions.receiveAllListings);
  // },
  // createListing (listing) {
  //   ListingApiUtil.createListing(listing, ListingActions.receiveSingleListing);
  // },

  fetchAllListings () {
    ListingApiUtil.fetchAllListings(ListingActions.receiveAllListings);
  },

  fetchListing (id) {
    ListingApiUtil.fetchListing(id, ListingActions.receiveListing);
  },

  createListing (listing) {
    ListingApiUtil.createListing(listing, ListingActions.receiveSingleListing);
  },

  deleteListing(id) {
    ListingApiUtil.deleteListing(id, ListingActions.removeListing);
  },

  editListing(listing){
    ListingApiUtil.updateListing(listing, ListingActions.updateListing);
  },

  removeListing (id) {
    AppDispatcher.dispatch({
      actionType: ListingConstants.LISTING_REMOVED,
      id: id
    });
  },

  updateListing (listing) {
    AppDispatcher.dispatch({
      actionType: ListingConstants.LISTING_RECEIVED,
      listing: listing
    });
  },

  receiveAllListings(listings) {
    AppDispatcher.dispatch({
      actionType: ListingConstants.LISTINGS_RECEIVED,
      listings: listings
    });
  },

  receiveSingleListing (listing) {
    AppDispatcher.dispatch({
      actionType: ListingConstants.LISTING_RECEIVED,
      listing: listing
    });
  }
};

module.exports = ListingActions;
