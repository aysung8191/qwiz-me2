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
            <h3>Add New Flashcard</h3>
            <form onSubmit={handleSubmit}>
                <label>Question: </label>
                <input type="text" name="question" onChange={handleChange}/>
                <label>Answer: </label>
                <input type="text" name = "answer" onChange={handleChange}/>
                <button>Add Flashcard</button>
            </form>
            <h4>{formData.question} is {formData.answer}</h4>
        </>
    )
}