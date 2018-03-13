/* Load Modules */
const express = require('express');
const router = express.Router();

/* Load controller */
const RefController = require('../../controller/refControler');
const refController = new RefController();

/**
 * Car Entity routes
 */
router.get('/count', function (req, res) {
    refController.countAll(res);
});
router.get('/:id', function (req, res) {
    refController.findById(req, res);
});
router.get('/', function (req,res) {
    refController.findAll(res);
});
router.post('/create', function (req, res) {
    refController.create(req, res);
});

module.exports = router;
