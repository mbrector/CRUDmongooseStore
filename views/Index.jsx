const React = require('react')

class Index extends React.Component{
    render() {
        return (
        <body style = {{backgroundColor: 'aquamarine'}}>
            <div>
                <h1 style = {{color: 'blueviolet'}}>OLIVIA & DADDY store</h1>
                <ul style = {{color: 'blueviolet'}}>
                    {
                        this.props.products.map((product, i) => {
                            return (
                                <li key={i}>
                                    Product: {product.name} <br />        
                                    <a href={`/products/${product.id}`}> <image src = {product.img}/> </a> <br />
                                    Price: {product.price} <br />
                                    Quantity: {product.qty} <br />               
                                </li>
                            )
                        })
                    }
                </ul>
                <nav>
                    <a style = {{color: 'blueviolet'}} href="products/new">Add a New Product</a>
                </nav>
            </div>
        </body>)
    }
}

module.exports = Index