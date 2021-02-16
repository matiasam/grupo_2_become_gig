const express = require('express');
const router = express.Router();
const controller = require('../controllers/mainController');

router.get('/', controller.index);
router.get('/detail', controller.detail);
router.get('/contacto', controller.contact);
router.get('/:id', controller.index);


module.exports = router;