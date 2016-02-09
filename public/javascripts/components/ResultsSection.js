window.ResultsSection = React.createClass({
  render: function() {
    if (this.props.results) {
      var resultsMarkup = this.props.results.map(function(result) {
        return (
          <ResultBox result={result} key={result['ProductId']}/>
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
