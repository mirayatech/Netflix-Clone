import { Link } from 'react-router-dom'
import { Button, Container, Form, Info, Input, Title } from './style'

export function SignIn() {
  return (
    <Container>
      <Form>
        <Title>Sign in</Title>

        <label className="sr-only" htmlFor="Email">
          Email
        </label>
        <Input type="email" id="Email" placeholder="Email" />

        <label className="sr-only" htmlFor="Password">
          Password
        </label>
        <Input type="password" placeholder="Password" />

        <Link to="/browse">
          {' '}
          <Button type="submit">Sign In</Button>
        </Link>

        <Info>
          New to Netflix?
          <Link to="/sign-up">Sign up now.</Link>
        </Info>
      </Form>
    </Container>
  )
}
