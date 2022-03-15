const React = require('react')
class Show extends React.Component {
   render () {
    if(this.props.product.qty > 0){
    return (
        <body style = {{backgroundColor: 'aquamarine'}}>
            <div style = {{color: 'blueviolet'}}>
                <h1>{this.props.product.name}</h1>
                <image src = {this.props.product.img}/><br />
                <h3>{this.props.product.description}</h3>
                <h3>${this.props.product.price}</h3>
                <h3>In stock: {this.props.product.qty}</h3>
                <a href={`/products/${this.props.product._id}/edit`}>Edit This Product</a><br />
                <a href={`/products`}>Home</a><br />
                <form action={`/products/${this.props.product._id}?_method=DELETE`} method="POST">
                    <input type="submit" value="DELETE"/>
                </form> 
                <form action={`/products/${this.props.product._id}?_method=PATCH`} method="POST">
                    <input type="submit" value="BUY" />
                </form>
            </div>
        </body>
     )}
    
 else{
    return (
        <body style = {{backgroundColor: 'aquamarine'}}>
            <div style = {{color: 'blueviolet'}}>
                <h1>{this.props.product.name}</h1>
                <image src = {this.props.product.img}/><br />
                <h3>{this.props.product.description}</h3>
                <h3>${this.props.product.price}</h3>
                <h3>OUT OF STOCK</h3>
                <a href={`/products/${this.props.product._id}/edit`}>Edit This Product</a><br />
                <a href={`/products`}>Home</a><br />
                <form action={`/products/${this.props.product._id}?_method=DELETE`} method="POST">
                    <input type="submit" value="DELETE"/>
                </form> 
            </div>
        </body>
     )}
    }
}
     

 module.exports  = Show;