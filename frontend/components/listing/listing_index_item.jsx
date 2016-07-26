const React = require('react');
const SublistingIndex = require('./sublisting_index');

const ListingIndexItem = React.createClass({
  handleKeyPress (e) {
    if (e.keyCode === 13) this.handleExit(e);
  },

  handleChange(e) {
    let newListing = this.props.listing;
    newListing.name = e.currentTarget.value;

    this.props.editName(newListing);
  },

  handleExit(e) {
    let newListing = this.props.listing;
    newListing.name = e.currentTarget.value;

    this.props.updateName(newListing);
  },

  render () {
    return(
      <div className="listing-item-container">
        <div className="listing-item">
          <textarea value={this.props.listing.name}
                    onChange={this.handleChange}
                    onBlur={this.handleExit}
                    onKeyDown={this.handleKeyPress}
                    className="listing-item-header">
          </textarea>
          <SublistingIndex />
          <a className="listing-item-footer" href="#/listings/1/boards/new">Add a board...</a>
        </div>
      </div>
    );
  }
});

module.exports = ListingIndexItem;
