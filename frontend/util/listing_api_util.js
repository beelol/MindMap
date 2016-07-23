"use strict";

const ApiUtil = {
  // fetchAllListings (filters, success) {
  //   $.get('api/listings', filters, success);
  // },
  // fetchListing () {
  //   $.get('api/listing/:id', filters, success);
  // },
  // createListing (data, success) {
  //   $.post('api/listings', { listing: data }, success);
  // },

  fetchAllListings (cb) {
    $.ajax({
      url: "api/listings",
      success: cb
    });
  },

  fetchListing (id, cb) {
    $.ajax({
      url: `api/listings/${id}`,
      success: cb
    });
  },

  deleteListing (id, cb) {
    $.ajax({
      url: `api/listings/${id}`,
      method: "DELETE",
      success: cb(id)
    });
  },

  createListing (newListing, cb, redirectCb) {
    $.ajax({
      url: "api/listings",
      method: "POST",
      data: {listing: newListing},
      success: function (listing) {
        cb(listing, redirectCb);
      }
    });
  },

  updateListing (listing, cb, redirectCb) {
    $.ajax({
      url: `api/listings/${listing.id}`,
      method: "PATCH",
      data: {listing: listing},
      success: function (listing) {
        cb(listing, redirectCb);
      }
    });
  }
};

module.exports = ApiUtil;

/* Stuff for testing */

// let newListing = {id: 2, title: "nice", listing_id: 2, author_id: 2}
//
// $.ajax({
//   url: "api/listings",
//   method: "POST",
//   data: {listing: newListing},
//   success: function (listing) {
//     console.log(listing);
//   }
// });
