const React = require('react')
class Show extends React.Component {
   render () {
    return (
        <div>
            <h1>{this.props.product.name}</h1>
            <h3>{this.props.product.description}</h3>
            <image src = {this.props.product.img}/><br />
            <h3>${this.props.product.price}</h3>
            <h3>In stock: {this.props.product.qty}</h3>
            <a href={`/products/${this.props.product._id}/edit`}>Edit This Product</a><br />
            <a href={`/products`}>Home</a>
        </div>
     )
    }
 }
 module.exports  = Show;