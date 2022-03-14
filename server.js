require('dotenv').config()
const express = require('express')
const methodOverride = require('method-override')
const app = express()
const PORT = process.env.PORT || 3000
const Products = require('./models/products')

const db = require('./models/db')
db.once('open', () => {
    console.log('connected to mongo')
})

app.set('view engine', 'jsx');
app.engine('jsx', require('express-react-views').createEngine())

app.use((req, res, next) => {
    res.locals.data = {}
    next()
})
app.use(express.urlencoded({ extended: true }))
app.use(methodOverride('_method'))
app.use('/products', require('./controllers/routeController'))

// app.get('/products/seed', async (req, res) => {
//     const newProducts =
//       [
//         {
//           name: 'Beans',
//           description: 'A small pile of beans. Buy more beans for a big pile of beans.',
//           img: 'https://cdn3.bigcommerce.com/s-a6pgxdjc7w/products/1075/images/967/416130__50605.1467418920.1280.1280.jpg?c=2',
//           price: 5,
//           qty: 99
//         }, {
//           name: 'Bones',
//           description: 'It\'s just a bag of bones.',
//           img: 'http://bluelips.com/prod_images_large/bones1.jpg',
//           price: 25,
//           qty: 0
//         }, {
//           name: 'Bins',
//           description: 'A stack of colorful bins for your beans and bones.',
//           img: 'http://www.clipartbest.com/cliparts/9cz/rMM/9czrMMBcE.jpeg',
//           price: 7000,
//           qty: 1
//         }
//       ]
  
//     try {
//       const seedItems = await Products.create(newProducts)
//       res.send(seedItems)
//     } catch (err) {
//       res.send(err.message)
//     }
//   })

app.listen(PORT, () => {
    console.log('Listening on port', PORT)
})