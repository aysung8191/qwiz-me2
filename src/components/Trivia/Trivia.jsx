import React from 'react'
import Flashcard from '../Flashcard/Flashcard'

export default function Trivia({ flashcards }) {
  return (
    <div className="card-grid">
        {flashcards.map(flashcard => {
            return <Flashcard flashcard={flashcard} key={flashcard.id} />
        })}
    </div>
  )
}
