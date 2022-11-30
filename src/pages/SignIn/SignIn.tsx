import { Link } from 'react-router-dom'

export function SignIn() {
  return (
    <div>
      <form>
        <h1>Sign in</h1>

        <label htmlFor="Email">Email</label>
        <input type="email" id="Email" />

        <label htmlFor="Password">Password</label>
        <input type="password" />

        <button type="submit">Sign In</button>

        <span>
          New to Netflix?
          <Link to="/sign-up">Sign up now.</Link>
        </span>
      </form>
    </div>
  )
}
