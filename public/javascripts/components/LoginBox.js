window.LoginBox = React.createClass({
  render: function() {
    return (
      <form onSubmit={this.handleSubmit} className="form-inline col-md-offset-2" id="login-form">
        <input type="text" ref="username" className="form-control" placeholder="Username"/>
        <input type="password" ref="password" className="form-control" placeholder="Password"/>
        <button className="btn btn-primary">Log In</button>
      </form>
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
