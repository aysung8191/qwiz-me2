import sendRequest from './send-request'
const BASE_URL='api/flashcards'

export function createFlashcard(flashcardData) {
    return sendRequest(BASE_URL, 'POST', flashcardData)
}

export function updateFlashcard(flashcardId, flashcardData) {
    return sendRequest(`${BASE_URL}/${flashcardId}`, 'PUT', flashcardData)
}

export function deleteFlashcard(flashcardId) {
    return sendRequest(`${BASE_URL}/${flashcardId}`, 'DELETE')
}