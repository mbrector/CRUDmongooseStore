const React = require('react')

class New extends React.Component {
    render() {
        return (
        <body style = {{backgroundColor: 'violet'}}>
            <div  style = {{color: 'aquamarine'}}>
                <h1 style = {{color: 'aquamarine'}}>New Product</h1>
                <form action = "/products" method = "POST">
                    Name: <input type = "text" name = "name" /><br/>
                    Description: <input type = "text" name = "description" /><br/>
                    Image URL: <input type = "text" name = "img" /><br/>
                    Price: <input type = "number" step = "0.01" name = "price" /><br />
                    Quantity: <input type = "number" name = "qty" /><br />
                    <input type="submit" name="" value="Create Product"/>
                </form>    
            </div>
        </body>
        )
    }
}

module.exports = New