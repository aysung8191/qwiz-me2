import {useState, useEffect} from 'react';
import NewFlashcardForm from '../../components/NewFlashcardForm/NewFlashcardForm';
import FlashcardCard from '../../components/FlashcardCard/FlashcardCard';

export default function FlashcardSet({user, flashcards, setFlashcards}) {
    const [userFlashcards, setUserFlashcards] = useState([]);

    const handleSubmit = (event, content) => {
        event.preventDefault();
        const newUserFlashcard = {
            
        }
    }

    return (
        <div>
            <br />
            <NewFlashcardForm user={user} flashcards={flashcards} setFlashcards={setFlashcards} />
            {userFlashcards.length > 0 ? (
                <>
                    <h2>My Flashcard Sets</h2>
                    {userFlashcards.map((userFlashcard, idx) => (
                        <FlashcardCard userFlashcard={userFlashcard} key={idx} />
                    ))}
                </>
            ) : (
                <h2>No Flashcard Sets Yet!</h2>
            )}
        </div>
    )
}