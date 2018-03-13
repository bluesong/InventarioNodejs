/* Load Modules */
const express = require('express');
const router = express.Router();

/* Load controller */
const UserController = require('../../controller/userControler');
const userController = new UserController();

/**
 * Car Entity routes
 */
router.get('/count', function (req, res) {
    userController.countAll(res);
});
router.get('/:id', function (req, res) {
    userController.findById(req, res);
});
router.get('/', function (req,res) {
    userController.findAll(res);
});
router.post('/', function (req, res) {
    userController.create(req, res);
});

module.exports = router;
