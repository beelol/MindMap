const React = require('react');
const Link = require('react-router').Link;
const hashHistory = require('react-router').hashHistory;

// User session stuff
const SessionStore = require('../../stores/session_store');
const SessionActions = require('../../actions/session_actions');

const NavBarRight = React.createClass({
  handleSignIn(){
    hashHistory.push("/login");
  },
  handleSignUp(){
    hashHistory.push("/signup");
  },
  render () {
    let signIn = "";
    let signUp = "";
    
    signIn = <div className="navigation-link" onClick={ this.handleSignIn }>Sign In</div>

    signUp = <div className="navigation-link" onClick={ this.handleSignUp }>Sign Up</div>

    return (
      <div className='navbar-right'>
        {signIn}
        {signUp}
      </div>
    );
  }
})

module.exports = NavBarRight;
