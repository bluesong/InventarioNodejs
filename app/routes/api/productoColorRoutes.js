/* Load Modules */
const express = require('express');
const router = express.Router();

/* Load controller */
//const ProductoController = require('../../controller/productoControler');
//const productoController = new ProductoController();

router.get('/count', function (req, res) {
    productoController.countAll(res);
});
router.get('/:id', function (req, res) {
    productoController.findById(req, res);
});
router.get('/', function (req,res) {
    productoController.findAll(res);
});
router.post('/', function (req, res) {
    productoController.create(req, res);
});

module.exports = router;
