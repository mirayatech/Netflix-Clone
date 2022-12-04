import styled from 'styled-components'
import { theme } from '../../../styles'

export const Container = styled.div`
  margin-top: -10px;
`

export const Caption = styled.h1`
  padding: 0 3rem;
  font-weight: 500;
  font-size: 1.5rem;
  color: ${theme.White};
`
export const Slider = styled.div`
  display: flex;
  overflow-x: auto;
  margin-top: -3rem;
  padding: 2rem 3rem;
  flex-direction: row;
  scroll-behavior: smooth;

  ::-webkit-scrollbar {
    display: none;
  }
`

export const Movie = styled.div`
  z-index: 1;
  display: flex;
  cursor: pointer;
  margin-right: 10px;
  border-radius: 4px;
  flex-direction: column;
  background-color: #1d1c1c;
  transition: all 0.2s ease;

  :hover {
    z-index: 5;
    transform: scale(1.06);
    box-shadow: 0 3px 6px rgba(0, 0, 0, 0.1), 0 3px 6px rgba(0, 0, 0, 0.1);
  }
`
export const Poster = styled.div`
  width: 16rem;
  height: 10rem;
`
export const Image = styled.img`
  width: 100%;
  height: 100%;
  border-radius: 4px;
`

export const Info = styled.div`
  display: none;
`
