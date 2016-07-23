const React = require('react');
const SublistingIndexItem = require('./sublisting_index_item');

const SublistingIndex = React.createClass({
  render () {
    return(
      <div className="sublisting-index-container">
        <div className="sublisting-index">
          <SublistingIndexItem />
          <SublistingIndexItem />
          <SublistingIndexItem />
        </div>
      </div>
    );
  }
});

module.exports = SublistingIndex;
