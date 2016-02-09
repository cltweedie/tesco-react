window.ResultBox = React.createClass({
  render: function() {
    var result = this.props.result;
    return (
      <section className="col-md-3">
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
  }
});
