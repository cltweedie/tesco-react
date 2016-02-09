window.SearchForm = React.createClass({
  handleSubmit: function(e) {
    e.preventDefault();
    var searchTerm = ReactDOM.findDOMNode(this.refs.searchTerm);
    this.props.getResults(searchTerm.value);
    searchTerm.value = '';
  },
  render: function() {
    return (
      <form id="search-form" className="form-inline col-md-5 col-md-offset-3" onSubmit={this.handleSubmit}>
        <div className="form-group">
          <input type="text" ref="searchTerm" className="form-control" placeholder="Enter a product to search..." />
          <button className="btn btn-primary" >Search</button>
        </div>
      </form>
    )
  }
});
