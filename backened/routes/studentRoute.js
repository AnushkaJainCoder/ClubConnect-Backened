const express = require('express');
const router = express.Router();
const studController = require('../controllers/studentController');

router.post('/create',studController.createUser);

module.exports = router;
