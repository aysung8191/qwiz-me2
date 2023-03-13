const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const flashcardSchema = new Schema({
    user: {
        type: Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    question: { type: String, required: true},
    answer: { type: String, required: true}
    }, {
    timestamps: true,
})

module.exports = mongoose.model('Flashcard', flashcardSchema);

// check SEI cafe for flow from MVC