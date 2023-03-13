import sendRequest from './send-request';

const BASE_URL = '/api/sets'

export async function getBoards() {
    return sendRequest(`${BASE_URL}`);    
}