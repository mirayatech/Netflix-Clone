import styled from 'styled-components'
import { theme } from '../../styles'

export function Footer() {
  return (
    <Container>
      Build by
      <a target="_blank" href="https://github.com/mirayatech">
        Miraya
      </a>
    </Container>
  )
}

const Container = styled.footer`
  padding: 30px;
  display: flex;
  margin-top: auto;
  align-items: flex-end;
  justify-content: center;

  a {
    padding-left: 5px;
    text-decoration: underline;
    :hover {
      color: ${theme.Red};
    }
  }
`
