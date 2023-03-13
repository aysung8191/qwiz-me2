import './App.css';
import { useState, useEffect } from 'react'
import { Routes, Route } from 'react-router-dom'
import { getUser } from '../../utilities/users-service'
import AuthPage from '../AuthPage/AuthPage';
import Flashcard from '../../components/Flashcard/Flashcard';
import FlashcardSets from '../FlashcardSets/FlashcardSets';
import Trivia from '../../components/Trivia/Trivia';
import NavBar from '../../components/NavBar/NavBar'

export default function App() {
  const [ user, setUser ] = useState(getUser())
  const [flashcards, setFlashcards] = useState([])

  return (
    <main className="App">
      {
        user ?
        <>
          <NavBar user={user} setUser={setUser} />
          <Routes>
            <Route path="/flashcards/new" element={<Flashcard />} />
            <Route path="/flashcards/sets" element={<FlashcardSets user={user} flashcards={flashcards} setFlashcards={setFlashcards}/> } />
            <Route path="/flashcards/trivia" element={<Trivia className="container" flashcards={flashcards} setFlashcards={setFlashcards} />} />
          </Routes>
        </>
        :
        <AuthPage setUser={setUser} />
      }
    </main>
  );
}



