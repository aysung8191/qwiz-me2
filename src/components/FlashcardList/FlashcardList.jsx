import { checkToken } from '../../utilities/users-service'

export default function FlashcardList() {

    async function handleCheckToken() {
        const expDate = await checkToken()
        console.log(expDate)
    }

    return (
        <>
            <h1>FlashcardList</h1>
            <button onClick={handleCheckToken}>Check When my Login Expires</button>
        </>
    )
}