const React = require('react');
const Link = require('react-router').Link;

const ReactRouter = require('react-router');
const hashHistory = ReactRouter.hashHistory;

const NavBarLeft = React.createClass({
  render () {
    // <img className='logo-icon'
    //   src="http://asanatraining.com/wp-content/uploads/2015/10/Asana-Logo_Full-Color-Mark.png"/>
    return (
      <div className='navbar-left'>
        <h1 className='logo-text'>MindMap</h1>
      </div>
    );
  }
})

//         <Link to="/projects" className="navigation-link">Projects</Link>
// <Link to="/teams" className="navigation-link-left">Teams</Link>

module.exports = NavBarLeft;
