import styled from 'styled-components'
import { flexCenter, formLayout, inputLayout, theme } from '../../styles'

export const Container = styled.div`
  ${flexCenter}
  height: 100vh;
  background: url('/banner.jpg') no-repeat center center/cover;
`

export const Form = styled.form`
  ${formLayout}
  background-color: ${theme.TransparentBlack};
`

export const Title = styled.h1`
  text-align: center;
  margin-bottom: 20px;
`

export const Input = styled.input`
  ${inputLayout}
  background-color: ${theme.InputColor};
`

export const Button = styled.button`
  border: none;
  padding: 10px;
  margin-top: 8px;
  font-size: 1rem;
  font-weight: 600;
  border-radius: 2px;
  color: ${theme.White};
  background-color: ${theme.Red};
`

export const Info = styled.span`
  margin-top: 20px;
  text-align: center;
  color: ${theme.GreyText};

  a {
    padding-left: 6px;
    color: ${theme.White};
    :hover {
      text-decoration: underline;
    }
  }
`
