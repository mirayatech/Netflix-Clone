import './avatar-style.css'
import { useState } from 'react'
import { ArrowDownIcon } from '../../../utilities'
import { Button, Wrapper, Image, Arrow, SignOut, Menu } from './style'
import { signOut } from 'firebase/auth'
import { firebaseAuth } from '../../../library'
import toast from 'react-hot-toast'
import { useNavigate } from 'react-router-dom'
import { theme } from '../../../styles'

export function Avatar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const navigate = useNavigate()
  const onSignOut = async () => {
    try {
      await signOut(firebaseAuth)

      toast('Successfully signed out.', {
        icon: '✅',
        style: {
          borderRadius: '10px',
          background: theme.Body,
          color: theme.White,
        },
      })
      navigate('/browse')
    } catch (error) {
      toast('Something went wrong.', {
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
    <Wrapper>
      <Button
        aria-label="menu"
        onMouseEnter={() => setIsMenuOpen(true)}
        onMouseLeave={() => setIsMenuOpen(false)}
      >
        <Image src="/avatar.png" alt="" />
        <Arrow>
          <ArrowDownIcon className={isMenuOpen ? 'arrowUp' : 'arrowDown'} />
        </Arrow>
      </Button>

      {isMenuOpen && (
        <Menu
          onMouseEnter={() => setIsMenuOpen(true)}
          onMouseLeave={() => setIsMenuOpen(false)}
        >
          <SignOut onClick={onSignOut}>Sign Out</SignOut>
        </Menu>
      )}
    </Wrapper>
  )
}
