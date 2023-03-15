import {useState} from 'react';

export default function NewFlashcardForm({createFlashcard}) {
    const [formData, setFormData] = useState({
        question: "",
        answer: ""
    });

    function handleChange(evt) {
        const newFormData = {...formData, [evt.target.name]: evt.target.value};
        setFormData(newFormData);
    }

    function handleSubmit(e) {
        e.preventDefault()
        createFlashcard(formData)
    }

    return (
        <>
            <h3>Create a New Flashcard</h3>
            <form className="flashcard-form" onSubmit={handleSubmit}>
                <label id="question-label">Question: </label>
                <input type="text" name="question" onChange={handleChange}/>
                <label id="answer-label">Answer: </label>
                <input type="text" name = "answer" onChange={handleChange}/>
                <button id="form-button">Add Flashcard</button>
            </form>
        </>
    )
}