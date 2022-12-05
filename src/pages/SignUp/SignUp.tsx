import { Link, useNavigate } from 'react-router-dom'
import { createUserWithEmailAndPassword } from 'firebase/auth'
import { Button, Container, Form, Info, Input, Title } from './style'
import { doc, DocumentReference, setDoc } from 'firebase/firestore'
import { firebaseAuth, firebaseDb, UserType } from '../../library'

import { FirebaseError } from 'firebase/app'
import toast from 'react-hot-toast'
import { useState } from 'react'
import { theme } from '../../styles'

export function SignUp() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const navigate = useNavigate()

  async function onSignUp(event: any) {
    event.preventDefault()
    try {
      await createUserWithEmailAndPassword(firebaseAuth, email, password)

      const userDoc = doc(
        firebaseDb,
        `/users/${firebaseAuth.currentUser?.uid}`
      ) as DocumentReference<UserType>
      await setDoc(userDoc, {
        name: name,
        email: email,
        password: password,
        id: firebaseAuth.currentUser?.uid,
      })

      toast('Successfully created an account.', {
        icon: '🎉',
        style: {
          borderRadius: '10px',
          background: theme.Body,
          color: theme.White,
        },
      })
      navigate(`/browse`)
    } catch (error) {
      const firebaseError = error as FirebaseError

      const isPasswordTooWeak = firebaseError.code === 'auth/weak-password'
      const isEmailAlreadyInUse =
        firebaseError.code === 'auth/email-already-in-use'

      if (isPasswordTooWeak) {
        toast('Password needs to be at least 6 characters.', {
          icon: '❌',
          style: {
            borderRadius: '10px',
            background: theme.Body,
            color: theme.White,
          },
        })
      }

      if (isEmailAlreadyInUse) {
        toast('Email is already being used, please use a different one.', {
          icon: '❌',
          style: {
            borderRadius: '10px',
            background: theme.Body,
            color: theme.White,
          },
        })
      }
    }
  }

  return (
    <Container>
      <Form onSubmit={onSignUp}>
        <Title>Sign up</Title>

        <label className="sr-only" htmlFor="Name">
          Name
        </label>
        <Input
          type="text"
          id="Name"
          placeholder="Name"
          onChange={(event) => setName(event.target.value)}
        />

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
          Already have netflix?
          <Link to="/">Sign in now.</Link>
        </Info>
      </Form>
    </Container>
  )
}
