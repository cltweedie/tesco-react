var App = React.createClass({
  getInitialState: function() {
    return { results: [] };
  },
  getResults: function(searchTerm) {
    this.setState({searchTerm: searchTerm})
    var _this = this;
    $.ajax({
      url: 'https://secure.techfortesco.com/tescolabsapi/restservice.aspx?command=PRODUCTSEARCH&JSONP=callback&searchtext=' + searchTerm + '&page=1&sessionkey=29Pb2jdxd5Tsb724YzzHGQVN3fJanikJA9MN6sghsvL7ohBg1q',
      type: "GET",
      dataType: "jsonp",
      jsonpCallback: 'callback',
      success: function(data) {
        _this.setState({ results: data['Products'] });
        console.log(data['Products']);
      }
    });
  },
  render: function() {
    return (
      <div>
        <SearchForm getResults={this.getResults}/>
        <div className="col-md-12">
          <ResultsSection results={this.state.results} />
        </div>
      </div>
    )
  }
});

var ResultsSection = React.createClass({
  render: function() {
    console.log(this.props.results);
    if (this.props.results.length > 0) {
      var resultsMarkup = this.props.results.map(function(result) {
        return (
          <section className="col-md-3" key={result['BaseProductId']}>
            <div className="panel panel-default">
              <div className="panel-heading">
                <a href={"http://www.tesco.com/groceries/product/details/?id=" + result['ProductId']}>{result['Name']}</a>
              </div>
              <div className="panel-body">
                <img className="col-md-6" src={result['ImagePath']} />
                <div className="col-md-6" >
                  <div className="price">
                  £{result['Price'].toFixed(2)}
                  <a className="buy-link" href={"http://www.tesco.com/groceries/product/details/?id=" + result['ProductId']}>Buy</a>
                  </div>
                </div>
              </div>
            </div>
          </section>
        )
      });
      return (
        <div>{resultsMarkup}</div>
      )
    } else {
      return (<div></div>)
    }
  }
});

var SearchForm = React.createClass({
  search: function(searchTerm) {

  },
  handleSubmit: function(e) {
    e.preventDefault();
    var searchTerm = ReactDOM.findDOMNode(this.refs.searchTerm);
    this.props.getResults(searchTerm.value);
    searchTerm.value = '';
  },
  render: function() {
    return (
      <form className="form-inline col-md-5 col-md-offset-3" onSubmit={this.handleSubmit}>
        <div className="form-group">
          <input type="text" ref="searchTerm" className="form-control" />
          <button className="btn btn-primary" >Search</button>
        </div>
      </form>
    )
  }
});

ReactDOM.render(<App />, document.getElementById('app'));
