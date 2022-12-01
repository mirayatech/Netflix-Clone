import styled from 'styled-components'
import { flexCenter } from '../../styles'

export const Container = styled.div`
  width: 100%;
  z-index: 20px;
  position: fixed;
  background-color: transparent;
`

export const Nav = styled.nav`
  margin: auto;
  display: flex;
  max-width: 2000px;
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
`
export const MobileLogo = styled.img`
  display: none;
`

export const Wrapper = styled.div`
  display: flex;
  flex-direction: row-reverse;
`
