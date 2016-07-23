const React = require('react');
const ListingIndexItem = require('./listing_index_item');

const ListingIndex = React.createClass({
  render () {
    return(
      <div className="listing-index-container">
        <div className="listing-index">
          <ListingIndexItem />
          <ListingIndexItem />
        </div>
      </div>
    );
  }
})

module.exports = ListingIndex;
