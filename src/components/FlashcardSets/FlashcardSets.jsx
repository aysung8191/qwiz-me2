import { checkToken } from '../../utilities/users-service'

export default function FlashcardSet() {

    async function handleCheckToken() {
        const expDate = await checkToken()
        console.log(expDate)
    }

    return (
        <>
            <h1>Flashcard Set</h1>
            <button onClick={handleCheckToken}>Check When my Login Expires</button>
        </>
    )
}