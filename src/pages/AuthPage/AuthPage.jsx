import SignUpForm from '../../components/SignUpForm/SignUpForm'
import LoginForm from '../../components/LoginForm/LoginForm'

export default function AuthPage({ setUser }) {
    return (
        <main>
            <h4>Sign Up</h4>
            <SignUpForm setUser={setUser} />
            <h4>Login</h4>
            <LoginForm setUser={setUser} />
        </main>
    )
}