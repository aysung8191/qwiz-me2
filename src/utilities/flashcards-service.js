import * as flashcardsAPI from './flashcards-api'

export async function createFlashcard(flashcardData) {
return flashcardsAPI.createFlashcard(flashcardData)
}

export async function updateFlashcard(flashcardId, flashcardData) {
    return flashcardsAPI.updateFlashcard(flashcardId, flashcardData)
}

export async function deleteFlashcard(flashcardId) {
    return flashcardsAPI.deleteFlashcard(flashcardId)
}