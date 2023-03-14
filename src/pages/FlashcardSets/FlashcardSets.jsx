import {useState, useEffect} from 'react';
import * as flashcardsAPI from '../../utilities/flashcards-api'
import * as setsAPI from '../../utilities/sets-api'
import NewFlashcardForm from '../../components/NewFlashcardForm/NewFlashcardForm';
import Flashcard from '../../components/Flashcard/Flashcard'

export default function FlashcardSet({user}) {
    const [userFlashcards, setUserFlashcards] = useState([]);

    useEffect(function () {
        async function getUserFlashcards() {
            const newUserFlashcards = await setsAPI.getFlashcards()
            setUserFlashcards(newUserFlashcards)
        }
        getUserFlashcards()
    }, []) 

    async function createFlashcard(cardData) {
        cardData.user = user._id
        const card = await flashcardsAPI.createFlashcard(cardData)
        setUserFlashcards([...userFlashcards, card])
    }

    return (
        <>
            <br />
            <NewFlashcardForm createFlashcard={createFlashcard} />
            <br />
            <h2>My Flashcards</h2>
            <div className="card-grid">
                {userFlashcards.length > 0 ? (
                    <>
                        {userFlashcards.map((userFlashcard, idx) => (
                            <Flashcard flashcard={userFlashcard} key={idx} />
                        ))}
                    </>
                ) : (
                    <h2>No Flashcards Created Yet!</h2>
                )}
            </div>
        </>
    )
}
