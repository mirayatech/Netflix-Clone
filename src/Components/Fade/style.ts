import styled from 'styled-components'
import { theme } from '../../styles'

export const Gardient = styled.div`
  bottom: 0;
  width: 100%;
  height: 10rem;
  position: absolute;

  background-image: linear-gradient(
    180deg,
    transparent,
    rgba(15, 15, 15, 0.61),
    rgb(17, 17, 17),
    ${theme.Body}
  );
`
