require('dotenv').config()
const express = require('express')
const methodOverride = require('method-override')
const app = express()
const PORT = process.env.PORT || 3000

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

app.listen(PORT, () => {
    console.log('Listening on port', PORT)
})