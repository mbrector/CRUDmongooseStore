const React = require('react');

class Edit extends React.Component{
  render() {
    return (
    <body style = {{backgroundColor: 'beige'}}>
      <div style = {{color: 'crimson'}}>      
        <form action={`/products/${this.props.product._id}?_method=PUT`} method="POST">
            Name: <input type = "text" name = "name" defaultValue={this.props.product.name}/><br/>
            Description: <input type = "text" name = "description" defaultValue={this.props.product.description}/><br/>
            Image URL: <input type = "text" name = "img" defaultValue={this.props.product.img}/><br/>
            Price: <input type = "number" step = "0.01" name = "price" min = "0" defaultValue={this.props.product.price}/><br />
            Quantity: <input type = "number" name = "qty" min = "0" defaultValue={this.props.product.qty}/><br />
            <input type="submit" value="Submit Changes"/>
        </form>
      </div>
    </body>
    )
  }
}
module.exports= Edit;