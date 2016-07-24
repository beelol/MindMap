const React = require('react');
const ListingIndexItem = require('./listing_index_item');

const ListingIndex = React.createClass({
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
