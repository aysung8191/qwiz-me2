import { Link } from 'react-router-dom'
import * as userService from '../../utilities/users-service' 

export default function NavBar({ user, setUser }) {

    function handleLogOut() {
        userService.logOut()
        setUser(null)
    }

    return (
        <nav>
            Welcome, {user.name}
            &nbsp; | &nbsp;
            <Link to="/flashcards/trivia">Trivia</Link>
            &nbsp; | &nbsp;
            <Link to="/flashcards">Flashcard List</Link>
            &nbsp; | &nbsp;
            <Link to="" onClick={handleLogOut}>Log Out</Link>
        </nav>
    )
}