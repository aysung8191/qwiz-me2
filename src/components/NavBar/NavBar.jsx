import { Link } from 'react-router-dom'
import * as userService from '../../utilities/users-service' 

export default function NavBar({ user, setUser }) {

    function handleLogOut() {
        userService.logOut()
        setUser(null)
    }

    return (
        <nav>
            <div className="logo">
                <Link to="">Qwiz.me</Link>
            </div>
            <ul>
                <li>
                    <Link to="">Welcome, {user.name}</Link>
                </li>
                <li>
                    <Link to="/flashcards/sets">My Flashcards</Link>
                </li>
                <li>
                    <Link to="/flashcards/trivia">Trivia</Link>
                </li>
                <li>
                    <Link to="/flashcards/chucknorris">Chuck Norris Jokes</Link>
                </li>
                <li>
                    <Link to="" onClick={handleLogOut}>Log Out</Link>
                </li>
            </ul>
        </nav>
    )
}