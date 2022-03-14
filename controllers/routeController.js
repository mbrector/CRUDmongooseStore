const express = require('express');
const router = express.Router();
const viewController = require('./viewController.js')
const dataController = require('./dataController.js')

router.get('/', dataController.index, viewController.index);

router.get('/new', viewController.new)

router.delete('/:id', dataController.destroy, viewController.redirectHome);

router.put('/:id', dataController.update, viewController.redirectShow);

router.post('/', dataController.create, viewController.redirectHome);

router.get('/:id/edit', dataController.show, viewController.edit);

router.get('/:id', dataController.show, viewController.show);

module.exports = router;