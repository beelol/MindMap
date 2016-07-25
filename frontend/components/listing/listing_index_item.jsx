const React = require('react');
const SublistingIndex = require('./sublisting_index');

const ListingIndexItem = React.createClass({
  getInitialState () {
    return {
      listing: {
        title: "Listing Item"
      }
    }
  },

  updateTitle (e) {
    this.setState({
      listing: {
        title: e.currentTarget.value
      }
    });
  },

  render () {
    return(
      <div className="listing-item-container">
        <div className="listing-item">
          <textarea value={this.state.listing.title}
                    onChange={this.updateTitle}
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
