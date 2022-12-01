import './avatar-style.css'
import { useState } from 'react'
import { ArrowDownIcon } from '../../../utilities'
import { Button, Wrapper, Image, Arrow, SignOut, Menu } from './style'

export function Avatar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
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
          <SignOut>Sign Out</SignOut>
        </Menu>
      )}
    </Wrapper>
  )
}
