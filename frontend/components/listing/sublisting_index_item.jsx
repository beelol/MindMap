const React = require('react');
const hashHistory = require('react-router').hashHistory;
const Modal = require('react-modal');

const SublistingIndexItem = React.createClass({
  openBoard () {
    hashHistory.push('/boards/1');
  },
  render () {
    return(
      <div className="sublisting-item-container"
           onClick={this.openBoard}>
        <div className="sublisting-item">
          This is a sublisting.
        </div>
      </div>
    );
  }
});

module.exports = SublistingIndexItem;
