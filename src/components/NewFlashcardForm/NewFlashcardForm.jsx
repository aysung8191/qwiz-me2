import {useState} from 'react';

export default function NewFlashcardForm({handleSubmit}) {
    const [flashcards, setFlashcards] = useState([])

    const handleFlashcardChange = (event) => {
        setFlashcards(event.target.value)
    };

    const handleFormSubmit = (event) => {
        event.preventDefault();
        handleSubmit(event, flashcards.question);
        setFlashcards('');
    };
    
    // const handleCancelClick = () => {
    //     if (edit) {
    //         handleCancelEdit();
    //     } else {
    //         setFlashcards('');
    //     }
    // }

    return (
        <>
            <h3>Add New Flashcard</h3>
            <form onSubmit={handleFormSubmit}>
                <label>Question: <input type="text" value={flashcards} onChange={handleFlashcardChange} />
                </label>
                <label>Answer: <input type="text" value={flashcards} /></label>
                <button>Add Flashcard</button>
            </form>
        </>
    )
}