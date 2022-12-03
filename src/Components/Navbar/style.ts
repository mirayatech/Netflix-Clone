import styled from 'styled-components'
import { flexCenter, flexItemsCenter, theme } from '../../styles'

export const Container = styled.div`
  width: 100%;
  z-index: 1000;
  position: fixed;
`

export const Nav = styled.nav`
  margin: auto;
  display: flex;
  max-width: 2200px;
  padding: 10px 30px;
  align-items: center;
  justify-content: space-between;
`

export const LeftSide = styled.div`
  ${flexCenter}
`

export const DesktopLogo = styled.img`
  width: 100px;
  margin-right: 20px;

  @media screen and (max-width: 1000px) {
    display: none;
  }
`

export const Wrapper = styled.div`
  display: flex;
  flex-direction: row-reverse;
`

// Mobile view

export const MobileLogo = styled.img`
  display: none;

  @media screen and (max-width: 1000px) {
    width: 30px;
    display: flex;
  }
`

export const MobileView = styled.div`
  display: flex;
  @media screen and (min-width: 1000px) {
    display: none;
  }
`

export const Button = styled.button`
  border: none;
  padding: 5px;
  font-size: 0.9rem;
  ${flexItemsCenter}
  color: ${theme.White};
  background-color: transparent;
  transition: all 0.3s ease;

  span {
    display: flex;
    margin-left: 10px;
    font-size: 0.8rem;
  }
`

export const MobileMenu = styled.div`
  top: 45px;
  left: 65px;
  ${flexCenter}
  flex-direction: column;
  width: 100px;
  padding: 15px 0;
  border-radius: 2px;
  position: absolute;
  background-color: ${theme.TransparentBlack};
  transition: all 0.3s ease;

  a {
    font-size: 0.9rem;
    padding: 10px 0;
    :hover {
      text-decoration: underline;
    }
  }
`

// export const SignOut = styled.button`
//   border: none;
//   font-weight: 600;
//   color: ${theme.White};
//   background-color: transparent;

//   :hover {
//     text-decoration: underline;
//   }
// `
