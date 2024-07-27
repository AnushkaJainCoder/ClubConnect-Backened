const express = require('express');
const router = express.Router();
const clubController = require('../controllers/clubController');

router.post('/create', clubController.createClub);

module.exports = router;