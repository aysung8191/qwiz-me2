const Flashcard = require('../../models/flashcard')

module.exports = {
    create,
    index
}

async function create(req, res) {
    console.log(req.body)
    const flashcard = await Flashcard.create(req.body)
    res.json(flashcard)
}

async function index(req, res) {
    let flashcards = []
    if (req.user) {
        flashcards = await Flashcard.find({user: req.user._id})
    }
    res.json(flashcards)  
}