const React = require('react');
const Dropdown = require('./dropdown');

const Hamburger = React.createClass({
  render () {
    return(
      <div className="hamburger-navbar">
        <div className="hamburger-container">
          <img className="hamburger" src="https://cdn4.iconfinder.com/data/icons/wirecons-free-vector-icons/32/menu-alt-512.png" />
        </div>
        <Dropdown />
      </div>
    );
  }
});

module.exports = Hamburger;
