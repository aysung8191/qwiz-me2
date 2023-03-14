import sendRequest from './send-request';

const BASE_URL = '/api/flashcards'

export async function getFlashcards() {
    return sendRequest(`${BASE_URL}`);    
}
