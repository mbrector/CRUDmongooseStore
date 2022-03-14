const Products = require('../models/products.js');

const dataController = {
  index(req, res, next){
    Products.find({}, (err, allProducts) => {
      if(err){
        res.status(404).send({
          msg: err.message
        })
      }else {
        res.locals.data.products = allProducts
        next()
      }
    });
  },
  create(req, res, next){
    Products.create(req.body, (error, createdProduct) => {
        if(err){
          res.status(404).send({
            msg: err.message
          })
        }else {
          res.locals.data.product = createdProduct
          next()
        }
    });
  },
  show(req, res, next){
    Products.findById(req.params.id, (err, foundProduct)=>{
      if(err){
        res.status(404).send({
          msg: err.message
        })
      } else {
        res.locals.data.product = foundProduct
        next()
      }
    })
  },
  update(req, res, next){
    Products.findByIdAndUpdate(req.params.id, req.body, { new: true }, (err, updatedProduct) => {
      if(err){
        res.status(404).send({
          msg: err.message
        })
      } else {
        res.locals.data.product = updatedProduct
        next()
      }
    });
  },
  destroy(req, res, next){
    Products.findByIdAndRemove(req.params.id, (err, product) => {
      if(err){
        res.status(404).send({
          msg: err.message
        })
      } else {
        res.locals.data.product = product
        next()
      }
    });
  }
}

module.exports = dataController