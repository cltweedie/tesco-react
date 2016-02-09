window.LoginBox = React.createClass({
  render: function() {
    return (
      <div id="login-form">
        <p id="intro-text" className="col-md-10">Please login using Tesco.com email address and password...</p>
        <form onSubmit={this.handleSubmit} className="form-inline col-md-offset-2">
          <input type="text" ref="username" className="form-control" placeholder="Email"/>
          <input type="password" ref="password" className="form-control" placeholder="Password"/>
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
