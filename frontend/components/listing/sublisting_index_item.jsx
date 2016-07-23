const React = require('react');

const SublistingIndexItem = React.createClass({
  render () {
    return(
      <div className="sublisting-item-container">
        <div className="sublisting-item">
          This is a sublisting.
        </div>
      </div>
    );
  }
});

module.exports = SublistingIndexItem;
