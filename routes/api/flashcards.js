const express = require('express');
const router = express.Router();
const flashcardsCtrl = require('../../controllers/api/flashcards');
const ensureLoggedIn = require('../../config/ensureLoggedIn')

router.post('/', flashcardsCtrl.create);
router.get('/', ensureLoggedIn, flashcardsCtrl.index)

module.exports = router;