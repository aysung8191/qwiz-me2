import './App.css';
import { useState, useEffect } from 'react'
import { Routes, Route } from 'react-router-dom'
import { getUser } from '../../utilities/users-service'
import AuthPage from '../AuthPage/AuthPage';
import Flashcard from '../../components/Flashcard/Flashcard';
import FlashcardSets from '../FlashcardSets/FlashcardSets';
import Trivia from '../Trivia/Trivia';
import NavBar from '../../components/NavBar/NavBar'
import ChuckJokes from '../ChuckJokes/ChuckJokes'

export default function App() {
  const [ user, setUser ] = useState(getUser())
  const [flashcards, setFlashcards] = useState([])
  const [userFlashcards, setUserFlashcards] = useState([])

  return (
    <main className="App">
      {
        user ?
        <>
          <NavBar user={user} setUser={setUser} />
          <Routes>
            <Route path="/flashcards/new" element={<Flashcard />} />
            <Route path="/flashcards/sets" element={<FlashcardSets user={user} userFlashcards={userFlashcards} setUserFlashcards={setUserFlashcards}/> } />
            <Route path="/flashcards/trivia" element={<Trivia className="container" flashcards={flashcards} setFlashcards={setFlashcards} />} />
            <Route path="/flashcards/chucknorris" element={<ChuckJokes flashcards={flashcards} setFlashcards={setFlashcards} /> } />
          </Routes>
        </>
        :
        <AuthPage setUser={setUser} />
      }
    </main>
  );
}



