const React = require('react')

class Index extends React.Component{
    render() {
        return (
        <body style = {{backgroundColor: 'aquamarine'}}>
            <div>
                <h1 style = {{color: 'blueviolet', fontSize: '50px'}}>WALMATT</h1>
                <ul style = {{color: 'blueviolet'}}>
                    {
                        this.props.products.map((product, i) => {
                            return (
                                <li key={i}>
                                    <h2>{product.name} </h2>      
                                    <a href={`/products/${product.id}`}> <image src = {product.img}/> </a> <br />
                                    Price: ${product.price} <br />               
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