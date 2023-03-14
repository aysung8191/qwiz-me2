import {useState, useEffect} from 'react';
import * as flashcardsAPI from '../../utilities/flashcards-api'
import * as setsAPI from '../../utilities/sets-api'
import NewFlashcardForm from '../../components/NewFlashcardForm/NewFlashcardForm';
import FlashcardCard from '../../components/FlashcardCard/FlashcardCard';
import Flashcard from '../../components/Flashcard/Flashcard'

export default function FlashcardSet({user}) {
    const [userFlashcards, setUserFlashcards] = useState([]);

    async function createFlashcard(cardData) {
        cardData.user = user._id
        const card = await flashcardsAPI.createFlashcard(cardData)
        setUserFlashcards([...userFlashcards, card])
    }

    async function getFlashcards() {
        const userFlashcards = user ? await setsAPI.getFlashcards() : []
        setUserFlashcards(userFlashcards)
    }

    return (
        <div>
            <br />
            <NewFlashcardForm createFlashcard={createFlashcard} />
            <br />
            <h2>My Flashcard Sets</h2>
            {userFlashcards.length > 0 ? (
                <>
                    {userFlashcards.map((userFlashcard, idx) => (
                        <Flashcard flashcard={userFlashcard} key={idx} />
                    ))}
                </>
            ) : (
                <h2>No Flashcard Sets Yet!</h2>
            )}
        </div>
    )
}
