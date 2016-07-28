//React
const React = require('react');
const ReactDOM = require('react-dom');
const Modal = require('react-modal');

//Router
const ReactRouter = require('react-router');
const Router = ReactRouter.Router;
const Route = ReactRouter.Route;
const IndexRoute = ReactRouter.IndexRoute;
const hashHistory = ReactRouter.hashHistory;
const IndexRedirect = ReactRouter.IndexRedirect;


/* Components */
// General
const App = require('./components/app');
const LoginForm = require('./components/login_form');
const ListingIndex = require('./components/listing/listing_index');

/* Board Components */
const BoardForm = require('./components/board/board_form');
const BoardDetail = require('./components/board/board_detail');

//Auth
const SessionStore = require('./stores/session_store');
const SessionActions = require('./actions/session_actions');

const appRouter = (
  <Router history={ hashHistory }>
    <Route path="/" component={ App }>
      <IndexRedirect to="/listings" />

      <Route path="/login" component={ LoginForm } />
      <Route path="/signup" component={ LoginForm } />
      <Route path="/listings" component={ ListingIndex } onEnter={ _ensureLoggedIn } >
        <Route path=":listing_id/boards/new" component={ BoardForm } onEnter={ _ensureLoggedIn } />
        <Route path=":listing_id/boards/:board_id" component={ BoardDetail } onEnter={ _ensureLoggedIn } />
      </Route>
    </Route>
  </Router>
);

function _ensureLoggedIn(nextState, replace) {
  // We don't want users to be able to visit our 'new' or 'review' routes
  // if they haven't already signed in/up. Let's redirect them!
  // `replace` is like a redirect. It replaces the current entry
  // into the history (and the hashFragment), so the Router is forced
  // to re-route.
    if (!SessionStore.isUserLoggedIn()) {
      replace('/login');
    }
}

// window.TaskApiUtil = require('./util/task_api_util');

document.addEventListener('DOMContentLoaded', function() {
  if (window.currentUser) {
    SessionActions.receiveCurrentUser(window.currentUser);
  }

  const root = document.getElementById('content');
  Modal.setAppElement(document.body);
  ReactDOM.render(appRouter, root);
});
