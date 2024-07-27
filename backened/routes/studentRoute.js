const express = require('express');
const router = express.Router();
const studController = require('../controllers/studentController');

router.post('/',studController.createUser);

module.exports = router;
