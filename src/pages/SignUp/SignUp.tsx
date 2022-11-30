import { Link } from 'react-router-dom'
import { Button, Container, Form, Info, Input, Title } from './style'

export function SignUp() {
  return (
    <Container>
      <Form>
        <Title>Sign up</Title>

        <label className="sr-only" htmlFor="Name">
          Name
        </label>
        <Input type="text" id="Name" placeholder="Name" />

        <label className="sr-only" htmlFor="Email">
          Email
        </label>
        <Input type="email" id="Email" placeholder="Email" />

        <label className="sr-only" htmlFor="Password">
          Password
        </label>
        <Input type="password" placeholder="Password" />

        <label className="sr-only" htmlFor="Confirm password">
          Confirm password
        </label>
        <Input type="password" placeholder="Confirm password" />

        <Button type="submit">Sign In</Button>

        <Info>
          Already have netflix?
          <Link to="/">Sign in now.</Link>
        </Info>
      </Form>
    </Container>
  )
}
