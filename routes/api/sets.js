const express = require('express');
const router = express.Router();
const setsCtrl = require('../../controllers/api/sets');
const ensureLoggedIn = require('../../config/ensureLoggedIn')

router.get('/', ensureLoggedIn, setsCtrl.index)

module.exports = router;