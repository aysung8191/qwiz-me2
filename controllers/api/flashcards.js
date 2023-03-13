const Flashcard = require('../../models/flashcard')

module.exports = {
    create,
}

async function create(req, res) {
    console.log(req.body)
    const flashcard = await Flashcard.create(req.body)
    res.json(flashcard)
}