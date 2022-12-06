import styled from 'styled-components'
import { flexCenter, theme } from '../../styles'

export const Error = styled.div`
  height: 100vh;
  margin: auto;
  display: flex;
  align-items: center;
  justify-content: center;
`

export const Container = styled.div`
  height: 100vh;
  margin: auto;
  display: flex;
  align-items: center;
  justify-content: center;

  @media screen and (max-width: 1000px) {
    height: auto;
    padding-bottom: 30px;
    flex-direction: column;
  }
`

export const Poster = styled.div`
  border-radius: 4px;
  height: 25rem;
  width: 15rem;
  @media screen and (max-width: 1000px) {
    margin-bottom: 30px;
  }
`

export const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 4px;
`

export const Info = styled.div`
  padding: 0 30px;
  @media screen and (max-width: 1000px) {
    text-align: center;
    ${flexCenter}
    flex-direction: column;
    margin-left: 0;
  }
`

export const Tags = styled.div`
  display: flex;
  align-items: center;
  margin: 20px 0;
`

export const Tag = styled.span`
  :first-child {
    background-color: #13ad4b;
  }
  :nth-child(2) {
    background-color: #2b8ed0;
  }

  padding: 1px 3px;
  font-weight: 600;
  font-size: 0.8rem;
  margin-right: 3px;
  border-radius: 3px;
  background-color: ${theme.InputColor};
`

export const Overview = styled.p`
  line-height: 1.5;
  max-width: 500px;
  margin-bottom: 20px;
`

export const Actions = styled.div`
  display: flex;
  align-items: baseline;
`

export const Buttons = styled.div`
  display: flex;

  button,
  a {
    ${flexCenter}
    margin-right: 10px;
    border-radius: 50%;
    font-size: 1.4rem;
    padding: 5px;
    color: ${theme.White};
    border: 2px solid ${theme.White};
    background-color: ${theme.InputColor};

    :first-child {
      color: ${theme.Black};
      background-color: ${theme.White};
    }

    :hover {
      opacity: 0.8;
    }
  }

  button:last-child {
    cursor: not-allowed;
  }
`

export const Title = styled.h1`
  font-size: 1.5rem;
  max-width: 500px;
`
