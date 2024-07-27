const express = require('express');
const router = express.Router();
const clubController = require('../controllers/clubController');

router.post('/create', clubController.createClub);
router.get('/', clubController.getClubs);

module.exports = router;