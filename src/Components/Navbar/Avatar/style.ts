import styled from 'styled-components'
import { flexCenter, theme } from '../../../styles'

export const Wrapper = styled.div`
  ${flexCenter}
  position: relative;
  cursor: pointer;
  z-index: 10;
`

export const Button = styled.button`
  border: none;
  padding: 5px;
  ${flexCenter}
  background-color: transparent;
  transition: all 0.3s ease;
`

export const Image = styled.img`
  cursor: pointer;
  width: 30px;
  border-radius: 3px;
`

export const Arrow = styled.span`
  margin-left: 10px;
  color: ${theme.White};
`

export const Menu = styled.div`
  top: 40px;
  right: 30px;
  ${flexCenter}
  width: 100px;
  padding: 15px 0;
  border-radius: 4px;
  position: absolute;
  background-color: ${theme.TransparentBlack};
  transition: all 0.3s ease;
`

export const SignOut = styled.button`
  border: none;
  font-weight: 600;
  color: ${theme.White};
  background-color: transparent;

  :hover {
    text-decoration: underline;
  }
`
