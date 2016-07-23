const React = require('react');
const SublistingIndex = require('./sublisting_index');

const ListingIndexItem = React.createClass({
  render () {
    return(
      <div className="listing-item-container">
        <div className="listing-item">
          <SublistingIndex />
        </div>
      </div>
    );
  }
});

module.exports = ListingIndexItem;
