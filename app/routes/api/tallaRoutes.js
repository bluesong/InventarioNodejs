/* Load Modules */
const express = require('express');
const router = express.Router();

/* Load controller */
const tallaControler = require('../../controller/tallaControler');
const TallaControler = new tallaControler();

/**
 * Car Entity routes
 */
router.get('/count', function (req, res) {
    TallaControler.countAll(res);
});
router.get('/:id', function (req, res) {
    TallaControler.findById(req, res);
});
router.get('/', function (req,res) {
    TallaControler.findAll(res);
});
router.post('/create', function (req, res) {
    TallaControler.create(req, res);
});

module.exports = router;
