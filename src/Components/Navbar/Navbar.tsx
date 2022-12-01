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

export function Navbar() {
  return (
    <Container>
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
