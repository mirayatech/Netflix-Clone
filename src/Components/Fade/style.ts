import styled from 'styled-components'
import { theme } from '../../styles'

export const Gardient = styled.div`
  z-index: 20;
  height: 10rem;
  width: 100%;
  margin-top: -160px;

  background-image: linear-gradient(
    180deg,
    transparent,
    rgba(15, 15, 15, 0.61),
    rgb(17, 17, 17),
    ${theme.Body}
  );
`
