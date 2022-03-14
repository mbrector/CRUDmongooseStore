const React = require('react')

class Index extends React.Component{
    render() {
        return (
        <div>
            <h1>Products Index Page</h1>
            <ul>
                {
                    this.props.products.map((product, i) => {
                        return (
                            <li key={i}>
                                Product: {product.name} <br />
                                Description: {product.description} <br />
                                <a href={`/products/${product.id}`}> <image src = {product.img}/> </a> <br />
                                Price: {product.price} <br />
                                Quantity: {product.qty} <br />

                      
                      {/* <form action={`/productss/${product._id}?_method=DELETE`} method="POST">
                          <input type="submit" value="DELETE"/>
                      </form>   
                        */}
                            </li>
                        )
                    })
                }
            </ul>
            <nav>
                <a href="products/new">Add a New Product</a>
            </nav>
        </div> )
    }
}

module.exports = Index