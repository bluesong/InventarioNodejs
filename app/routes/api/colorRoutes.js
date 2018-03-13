/* Load Modules */
const express = require('express');
const router = express.Router();

/* Load controller */
const ColorController = require('../../controller/colorControler');
const colorController = new ColorController();

/**
 * Car Entity routes
 */
router.get('/count', function (req, res) {
    colorController.countAll(res);
});
router.get('/:id', function (req, res) {
    colorController.findById(req, res);
});
router.get('/', function (req,res) {
    colorController.findAll(res);
});
router.post('/create', function (req, res) {
    colorController.create(req, res);
});

module.exports = router;
