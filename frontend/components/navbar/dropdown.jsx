const React = require('react');

const Dropdown = React.createClass({
  render () {
    return(
      <div className='dropdown'>
          <ul className="list">
            <li className='dropdown-item'>Sign Out</li>
          </ul>
      </div>
    );
  }
});

module.exports = Dropdown;
