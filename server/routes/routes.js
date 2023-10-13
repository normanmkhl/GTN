const express = require('express');
const router = express.Router();

const {
    getExporterFOB,
} = require('../controllers/exporterControllers');

router.route('/exporter/:filter').get(getExporterFOB)

module.exports = router;