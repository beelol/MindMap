const React = require('react');
const hashHistory = require('react-router').hashHistory;
const Modal = require('react-modal');

const SublistingIndexItem = React.createClass({
  openBoard () {
    hashHistory.push(`listings/${this.props.listing.id}/boards/${this.props.sublisting.id}`);
  },

  render () {
    return(
      <div className="sublisting-item-container"
           onClick={this.openBoard}>
        <div className="sublisting-item">
          {this.props.sublisting.name}
        </div>
      </div>
    );
  }
});

module.exports = SublistingIndexItem;
