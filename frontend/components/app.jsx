"use strict";

const React = require('react');

// Page Navigation
const NavBar = require('../components/navbar/navbar');

// Sessions / Login
const SessionStore = require('../stores/session_store');
const SessionActions = require('../actions/session_actions');

// Routing
const Link = require('react-router').Link;
const hashHistory = require('react-router').hashHistory;

// Other
const WelcomeScreen = require('./welcome_screen');

const App = React.createClass({
  componentDidMount() {
    this.forceUpdateListener = SessionStore.addListener(this.forceUpdate.bind(this));
  },

  componentWillUnmount() {
    this.forceUpdateListener.remove();
  },

  componentWillReceiveProps (newProps) {
    if (newProps.location.pathname === '/' && SessionStore.currentUser()) {
      this.redirectToFirstProject();
    }
  },

  greeting() {
    if (SessionStore.isUserLoggedIn()) {

    	return (
    		<hgroup className="header-group">
    		</hgroup>
    	);
    } else if ( !this.onLoginPage() ) {
      return (
        <nav className="login-signup">
          <Link to="/login" activeClassName="current">Login</Link>
          &nbsp;or&nbsp;
          <Link to="/signup" activeClassName="current">Sign up!</Link>
        </nav>
      );
    }
  },

  onLoginPage () {
    return ["/login", "/signup"].includes(this.props.location.pathname);
  },

  shouldShowWelcome () {
    return (!SessionStore.isUserLoggedIn() && !this.onLoginPage());
  },

  getWelcomeDiv() {
    return this.shouldShowWelcome() ? <WelcomeScreen /> : <div></div>;
  },

  getNavBar () {
    let navBar = SessionStore.isUserLoggedIn() ? <NavBar /> : <div />;

    // if (this.shouldShowWelcome()) {
    //   navBar = <WelcomeNavBar />;
    // }

    return navBar;
  },

  render() {
    return (
      <div>
        {this.getNavBar()}
        {this.getWelcomeDiv()}
        {this.props.children}
      </div>
    );
  }
});

module.exports = App;






// <h2 className="header-name">Hi, {SessionStore.currentUser().username}!</h2>
