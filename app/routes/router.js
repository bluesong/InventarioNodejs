/**
 * Express Router configuration
 */
const express = require('express');
const router = express.Router();

/* API routes */
router.use('/color', require('./api/colorRoutes'));
router.use('/ref', require('./api/refRoutes'));
router.use('/Prod', require('./api/productoRoutes'));
router.use('/ProdCol', require('./api/productoColorRoutes'));
router.use('/use', require('./api/userRoutes'));
router.use('/talla', require('./api/tallaRoutes'));


module.exports = router;
