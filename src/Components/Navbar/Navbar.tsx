import './navbar-style.css'
import { Link } from 'react-router-dom'
import {
  Container,
  DesktopLogo,
  LeftSide,
  MobileLogo,
  Nav,
  Wrapper,
} from './style'
import { Avatar } from './Avatar/Avatar'
import { Search } from './Search/Search'
import { useState } from 'react'

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState<boolean>(false)

  const changeBackground = () => {
    if (window.scrollY >= 50) {
      setIsScrolled(true)
    } else {
      setIsScrolled(false)
    }
  }

  window.addEventListener('scroll', changeBackground)
  const navBackground = isScrolled ? 'navBarFilled' : 'navBar'
  return (
    <Container className={navBackground}>
      <Nav>
        <LeftSide>
          <Link to="/browse" aria-label="home">
            <DesktopLogo src="/desktop-netflix.png" alt="logo" />
            <MobileLogo src="/desktop-netflix.png" alt="logo" />
          </Link>

          <Link to="/browse" className="navLink">
            Home
          </Link>
          <Link to="/my-list" className="navLink">
            My list
          </Link>
        </LeftSide>

        <Wrapper>
          <Avatar />
          <Search />
        </Wrapper>
      </Nav>
    </Container>
  )
}
