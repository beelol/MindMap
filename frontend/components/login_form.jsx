

const React = require('react');
const Link = require('react-router').Link;
const hashHistory = require('react-router').hashHistory;
const SessionActions = require('../actions/session_actions');
const SessionStore = require('../stores/session_store');
const ErrorStore = require('../stores/error_store');

const LoginForm = React.createClass({

	DEMO_USERNAME: "Guest",

	DEMO_PASSWORD: "the_best",

	demoLoginHandler(e) {
		e.preventDefault();

		this.setState({ username: "", password: ""});
		var _username = this.DEMO_USERNAME.split("").slice();
		this.fillDemoUsername(_username);
	},

	fillDemoUsername: function(_username) {
	 var self = this;
	 if (_username.length > 0) {
		 setTimeout(function() {
			 self.setState({
				 username: self.state.username + _username.shift()
			 });

			 self.fillDemoUsername(_username);
		 }, 120);
	 } else {
		 var _password = this.DEMO_PASSWORD.split("").slice();
		 this.fillDemoPassword(_password);
	 }
 },

 fillDemoPassword: function(_password) {
	 var self = this;
	 if (_password.length > 0) {
		 setTimeout(function() {
			 self.setState({
				 password: self.state.password + _password.shift()
			 });

			 self.fillDemoPassword(_password);
		 }, 120);
	 } else {
		 var e = { preventDefault: function() {} };

		 this.login();
	 }
 },

 login () {
	 const formData = {
		username: this.state.username,
		password: this.state.password
	 };

	 SessionActions.logIn(formData);
 },

	contextTypes: {
		router: React.PropTypes.object.isRequired
	},

  getInitialState() {
    return {
      username: "",
      password: ""
    };
  },

  componentDidMount() {
    this.errorListener = ErrorStore.addListener(this.forceUpdate.bind(this));
    this.sessionListener = SessionStore.addListener(this.handleSignIn);
  },

  componentWillUnmount() {
    this.errorListener.remove();
    this.sessionListener.remove();
  },

  handleSignIn() {
    if (SessionStore.isUserLoggedIn()) {
      this.context.router.push("/");
			console.log("signed in");
    }
  },

	handleSubmit(e) {
		e.preventDefault();

		const formData = {
			username: this.state.username,
			password: this.state.password
		};


    if (this.props.location.pathname === "/login") {
      SessionActions.logIn(formData);
    } else {
      SessionActions.signUp(formData);
    }

		hashHistory.push('/');
		// console.log(this.fieldErrors("username"));
	},

  fieldErrors(field) {
    const errors = ErrorStore.formErrors(this.formType());

    if (!errors[field]) { return; }

    const messages = errors[field].map( (errorMsg, i) => {
      return <li key={ i }>{ errorMsg }</li>;
    });

    return <ul>{ messages }</ul>;
  },

  formType() {
		// I think you can get this from params
    return this.props.location.pathname.slice(1);
  },

  update(property) {
    return (e) => this.setState({[property]: e.target.value});
  },

	switchFormString () {
		return (this.formType() === "login" ? "Don't have an account?" : "Already have an account?");
	},

	switchForm() {
		if (this.formType() === "login") {
			hashHistory.push('/signup');
		} else {
			hashHistory.push('/login');
		}
	},

	render() {
		let submitText = "Log In";
		let switchText = "Sign Up";

    if (this.formType() === "login") {

    } else {
			switchText = "Log In";
			submitText = "Sign Up"
    }

		return (
				<div className="login-form-background">
					<div className="login-form-container">
						{ this.fieldErrors("base") }
					<div className="login-form-box">
						<form className="login-form-box-inner">
			        <h1>Welcome!</h1>

							<button onClick={this.demoLoginHandler} className="button-general login-demo">Use a Demo Account</button>

							<div className="dialog-login-separator">
								or
							</div>

							<div className="login-form">
								<div className="login-input-label">Username</div>
								{ this.fieldErrors("username") }
									<input type="text"
				            value={this.state.username}
				            onChange={this.update("username")}
										className="login-input" />
							</div>

							<div className="login-form">
									<div className="login-input-label">Password</div>
									{ this.fieldErrors("password") }
				          <input type="password"
				            value={this.state.password}
				            onChange={this.update("password")}
										className="login-input" />
							</div>

							<div className="login-form-submit">
								<button onClick={this.handleSubmit} className="button-general login-submit">
									{submitText}
								</button>
							</div>
						</form>
					</div>
					<div className="login-form-footer">
						<div className="form-mode-dialog">
							{this.switchFormString()}
						</div>
						<button className="form-mode-button" onClick={this.switchForm}>
							{switchText}
						</button>
					</div>
				</div>

			</div>
		);
	}
});

module.exports = LoginForm;
