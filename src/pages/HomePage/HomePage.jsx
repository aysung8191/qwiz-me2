import { Link } from 'react-router-dom'

export default function HomePage() {
    return(
        <>
            <br />
            <main>
                <div className="home-main-card">
                    <div className="home-main-left-content">
                        <h1>Need to study? You've come to the right place.</h1>
                        <p>Create your own set of flashcards to run through and quiz yourself.</p>
                        <p>Join other fellow students in prepping for that upcoming exam, technical interview, or just learning a new subject for fun!</p>
                    </div>
                    <div className="home-main-right-content">
                        <h1>Interested in learning a new language?</h1>
                        <p>Check out 1000's of terms, expressions, and phrases you can use to create your own set of flashcards:</p>
                        <a href="https://www.studystack.com/flashcard-265019">Chinese</a>
                        <br />
                        <a href="https://www.studystack.com/flashcard-31416">English</a>
                        <br />
                        <a href="https://www.studystack.com/flashcard-125095">French</a>
                        <br />
                        <a href="https://www.studystack.com/flashcard-320050">German</a>
                        <br />
                        <a href="https://www.studystack.com/flashcard-50113">Japanese</a>
                        <br />
                        <a href="https://www.studystack.com/flashcard-630393">Russian</a>
                        <br />
                        <a href="https://www.studystack.com/flashcard-491426">Spanish</a>
                    </div>
                </div>
                <br />
                <div id="home-bottom-container">
                    <div className="home-left-card">
                        <h1>Looking to get started?</h1>
                        <Link to="/flashcards/sets">Start creating flashcards!</Link>
                        <p>Enjoy unlimited storage as a user - there's no limit to how many cards or sets you can create.</p>
                    </div>
                    <div className="home-middle-card">
                        <h1>Having friends over for Trivia Night?</h1>
                        <p>Need some questions? Pull thousands of questions across various categories <Link to="/flashcards/trivia">here</Link></p>
                    </div>
                    <div className="home-right-card">
                        <h1>In need of a good laugh?</h1>
                        <p>Get a randomly generated Chuck Norris joke that'll make your day just a little bit better.</p>
                        <p>Check them out <Link to="/flashcards/chucknorris">here</Link></p>
                    </div>
                </div>
            </main>
        </>
    )
}