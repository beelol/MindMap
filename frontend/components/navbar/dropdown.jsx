const React = require('react');
const SessionActions = require('../../actions/session_actions');

const Dropdown = React.createClass({
  _handleLogOut(){
    SessionActions.logOut();
  },

  render () {
    return(
      <div className='dropdown'>
          <ul className="list">
            <li className='dropdown-item'
                onClick={this._handleLogOut}>Sign Out</li>
            <li className='dropdown-item'>Profile</li>
            <li className='dropdown-item'>Settings</li>
          </ul>
      </div>
    );
  }
});

module.exports = Dropdown;
