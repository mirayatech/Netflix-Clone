import './navbar-style.css'
import { Link } from 'react-router-dom'
import {
  Button,
  Container,
  DesktopLogo,
  LeftSide,
  MobileLogo,
  MobileMenu,
  MobileView,
  Nav,
  Wrapper,
} from './style'
import { Avatar } from './Avatar/Avatar'
import { Search } from './Search/Search'
import { useState } from 'react'
import { ArrowDownIcon } from '../../utilities'

export function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

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
            <MobileView>
              <MobileLogo src="/mobile-netflix.png" alt="logo" />
              <Button
                aria-label="menu"
                onMouseEnter={() => setIsMenuOpen(true)}
                onMouseLeave={() => setIsMenuOpen(false)}
              >
                Browse
                <span>
                  <ArrowDownIcon
                    className={isMenuOpen ? 'arrowUp' : 'arrowDown'}
                  />
                </span>
              </Button>

              {isMenuOpen && (
                <MobileMenu
                  onMouseEnter={() => setIsMenuOpen(true)}
                  onMouseLeave={() => setIsMenuOpen(false)}
                >
                  <Link to="/browse">Home</Link>
                  <Link to="/my-list">My list</Link>
                </MobileMenu>
              )}
            </MobileView>
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
