const express = require('express');
const router = express.Router();
const PagesController =  require('../controllers/PagesContoller.js')
router.get('/', PagesController.home);

module.exports = router;