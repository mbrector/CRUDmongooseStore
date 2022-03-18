require('dotenv').config()
const Product = require('./models/products')
const db = require('./models/db')

const newProducts =
    [
    {
        name: 'Ice Cream',
        description: 'Delicious Ice Cream just for you!',
        img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRS-V2B_jc3XR1sTbNKTLmWVbTD1Ni96fWGMw&usqp=CAU',
        price: 3.49,
        qty: 24
    }, {
        name: 'Cookies',
        description: 'Ooey gooey Chocolate Chip Cookies',
        img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRe144estFXzlS3p2pD5GB7z0FqDbM0whQrrw&usqp=CAU',
        price: 12.99,
        qty: 18
    }, {
        name: 'Milk',
        description: 'Make your bones strong with ice cold Milk!',
        img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTHaUzGOPMLTlDRpDWkBHBXnyApCfK2b_kxZw&usqp=CAU',
        price: 5.99,
        qty: 12
    }
    ]

const seedDB = async () => {
    await Product.deleteMany({})
    await Product.insertMany(newProducts)
}

seedDB().then(() => {
    db.close()
})