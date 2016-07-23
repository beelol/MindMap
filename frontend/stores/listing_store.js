"use strict";

const Store = require('flux/utils').Store;
const ListingConstants = require('../constants/listing_constants');
const AppDispatcher = require('../dispatcher/dispatcher');

const ListingStore = new Store(AppDispatcher);

let _listings = {};

ListingStore.currentListing = undefined;

ListingStore.all = function () {
  return Object.assign({}, _listings);
};

ListingStore.find = function (id) {
  return Object.assign({}, _listings[id]);
};

ListingStore.findByTeam = function (team_id) {
  let listings = [];

  Object.keys(_listings).forEach((key) => {
    let newKey = parseInt(key);

    if (_listings[newKey].team_id === team_id) {
      listings.push(_listings[key]);
    }
  });

  return listings;
};

function resetAllListings (listings) {
  listings.forEach((listing) => {
    _listings[listing.id] = listing;
  });

  ListingStore.__emitChange();
}

function resetSingleListing (listing) {
  _listings[listing.id] = listing;
  ListingStore.__emitChange();
}

function removeListing (id) {
  delete _listings[id];

  ListingStore.__emitChange();
}

ListingStore.__onDispatch = function(payload) {
  switch (payload.actionType) {
    case ListingConstants.LISTINGS_RECEIVED:
      resetAllListings(payload.listings);
      break;
    case ListingConstants.LISTING_RECEIVED:
      resetSingleListing(payload.listing);
      break;
    case ListingConstants.LISTING_REMOVED:
      removeListing(payload.id);
      break;
  }
};

module.exports = ListingStore;
