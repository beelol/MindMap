const React = require('react');
const SublistingIndexItem = require('./sublisting_index_item');

const SublistingIndex = React.createClass({
  render () {
    return(
      <div className="sublisting-index">
        <SublistingIndexItem listing_id={1}/>
        <SublistingIndexItem />
        <SublistingIndexItem />
        <SublistingIndexItem />
        <SublistingIndexItem />
        <SublistingIndexItem />
        <SublistingIndexItem />
        <SublistingIndexItem />
        <SublistingIndexItem />
        <SublistingIndexItem />
        <SublistingIndexItem />
        <SublistingIndexItem />
        <SublistingIndexItem />
        <SublistingIndexItem />
        <SublistingIndexItem />
        <SublistingIndexItem />
        <SublistingIndexItem />
        <SublistingIndexItem />
        <SublistingIndexItem />
        <SublistingIndexItem />
        <SublistingIndexItem />
        <SublistingIndexItem />
        <SublistingIndexItem />
      </div>
    );
  }
});

module.exports = SublistingIndex;
