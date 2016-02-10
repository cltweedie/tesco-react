var App = React.createClass({
  getInitialState: function() {
    return { results: [], sessionKey: "" };
  },
  getResults: function(searchTerm) {
    this.setState({searchTerm: searchTerm})
    var _this = this;
    var now = new Date();
    var n = now.getTime();
    $.ajax({
      url: 'https://secure.techfortesco.com/tescolabsapi/restservice.aspx?command=PRODUCTSEARCH&JSONP=callback&searchtext=' + searchTerm + '&page=1&sessionkey=' + this.state.sessionKey,
      type: "GET",
      dataType: "jsonp",
      jsonpCallback: 'callback',
      success: function(data) {
        var then = new Date();
        var t = then.getTime();
        var seconds = (t - n) / 1000;
        console.log("Search took: " + seconds + " seconds.")
        _this.setState({ results: data['Products'] });
        console.log(data['Products']);
      }
    });
  },
  login: function(username, password) {
    $('#app').append('<div id="modal-background"></div>');
    $('#modal-background').append('<div id="modal"><p>Please wait, logging in to Tesco.com...</p></div>');
    $('#modal').append('<img id="loadingbar" src="images/loadingbar.gif" />');
    var _this = this;
    $.ajax({
      url: 'https://secure.techfortesco.com/tescolabsapi/restservice.aspx?command=LOGIN&JSONP=callback&email=' + username + ' &password=' + password + '&developerkey=l5IpiptrB7p8M6OA9Wob&applicationkey=2D4F65B59286C8272200',
      type: "GET",
      dataType: "jsonp",
      jsonpCallback: 'callback',
      success: function(data) {
        if (data['StatusCode'] == 0) {
          _this.setState({ sessionKey: data['SessionKey'] });
          console.log(data['SessionKey']);
          $('#modal').text("Thanks, you've logged in successfully!")
          setTimeout(function() {
            $('#search-form').show();
            $('#modal-background').remove();
            $('#search-text').focus();
          }, 2000)
        } else {
          $('#modal').text("Something went wrong. Please refresh the page and try again.");
        }
      }
    });
  },
  render: function() {
    return (
      <div>
        <LoginBox login={this.login} />
        <SearchForm getResults={this.getResults}/>
        <div className="col-md-12">
          <ResultsSection results={this.state.results} />
        </div>
      </div>
    )
  }
});

ReactDOM.render(<App />, document.getElementById('app'));
