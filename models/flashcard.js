const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const flashcardSchema = new Schema({
    user: [userSchema],
    question: String,
    answer: String
    }, {
    timestamps: true,
})

module.exports = mongoose.model('Flashcard', flashcardSchema);