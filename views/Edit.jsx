const React = require('react');

class Edit extends React.Component{
  render() {
    return (
      <div>      
        <form action={`/products/${this.props.products._id}?_method=PUT`} method="POST">
            Name: <input type = "text" name = "name" /><br/>
            Description: <input type = "text" name = "description" /><br/>
            Image URL: <input type = "text" name = "img" /><br/>
            Price: <input type = "number" name = "price" /><br />
            Quantity: <input type = "number" name = "qty" /><br />
            <input type="submit" value="Submit Changes"/>
        </form>
      </div>
    )
  }
}
module.exports= Edit;