window.LoginBox = React.createClass({
  render: function() {
    return (
      <div id="login-form">
        <p id="intro-text" className="col-md-10">Please login to Tesco.com...</p>
        <form onSubmit={this.handleSubmit} className="form-inline col-md-offset-3">
          <input id="email-input" type="text" ref="username" className="form-control" placeholder="Email"/>
          <input id="password-input" type="password" ref="password" className="form-control" placeholder="Password"/>
          <button className="btn btn-primary">Log In</button>
        </form>
      </div>
    )
  },
  handleSubmit: function(e) {
    e.preventDefault();
    var username = ReactDOM.findDOMNode(this.refs.username);
    var password = ReactDOM.findDOMNode(this.refs.password);
    this.props.login(username.value, password.value);
    $(ReactDOM.findDOMNode(this)).hide();
  }
})
