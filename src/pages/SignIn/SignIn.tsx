import { Link, useNavigate } from 'react-router-dom'
import { signInWithEmailAndPassword } from 'firebase/auth'
import { Button, Container, Form, Info, Input, Title } from './style'
import toast from 'react-hot-toast'
import { firebaseAuth } from '../../library'
import { useState } from 'react'
import { theme } from '../../styles'

export function SignIn() {
  const navigate = useNavigate()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const onSignUp = async (event: any) => {
    event.preventDefault()

    try {
      await signInWithEmailAndPassword(firebaseAuth, email, password)
      toast('Successfully signed in.', {
        icon: '✅',
        style: {
          borderRadius: '10px',
          background: theme.Body,
          color: theme.White,
        },
      })
      navigate('/browse')
    } catch (error) {
      toast('Something went wrong, either email or password is incorrect.', {
        icon: '❌',
        style: {
          borderRadius: '10px',
          background: theme.Body,
          color: theme.White,
        },
      })
    }
  }

  return (
    <Container>
      <Form onSubmit={onSignUp}>
        <Title>Sign in</Title>

        <label className="sr-only" htmlFor="Email">
          Email
        </label>
        <Input
          type="email"
          id="Email"
          placeholder="Email"
          onChange={(event) => setEmail(event.target.value)}
        />

        <label className="sr-only" htmlFor="Password">
          Password
        </label>
        <Input
          type="password"
          placeholder="Password"
          onChange={(event) => setPassword(event.target.value)}
        />

        <Button type="submit">Sign In</Button>

        <Info>
          New to Netflix?
          <Link to="/sign-up">Sign up now.</Link>
        </Info>
      </Form>
    </Container>
  )
}
