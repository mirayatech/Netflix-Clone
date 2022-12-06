import styled from 'styled-components'
import { boxShadow, flexCenter, infoButton, theme } from '../../../styles'

export const Container = styled.div`
  margin-top: -100px;
  position: relative;

  :hover button {
    opacity: 1;
  }
`

export const Slider = styled.div`
  display: flex;
  overflow-x: auto;
  margin-top: -4rem;
  padding: 5rem 3rem;
  flex-direction: row;
  scroll-behavior: smooth;

  ::-webkit-scrollbar {
    display: none;
  }
`

export const Movie = styled.div`
  z-index: 1;
  width: 15rem;
  height: 22rem;
  display: flex;
  flex-shrink: 0;
  cursor: pointer;
  margin-right: 8px;
  border-radius: 0.28rem;
  flex-direction: column;
  transition: all 300ms ease;
  background-color: ${theme.CardColor};

  :hover {
    z-index: 5;
    ${boxShadow};
    transform: scale(1.06);
  }

  :hover .info {
    display: flex;
    margin-top: -80px;
    padding: 10px;
    height: fit-content;
    flex-direction: column;
  }

  @media screen and (max-width: 1000px) {
    width: 12rem;
    height: 18rem;
  }
`
export const Poster = styled.div`
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 0.28rem;
`
export const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 4px;
`

export const Info = styled.div`
  display: none;
  font-size: inherit;
  min-height: fit-content;
  background-color: transparent;

  span {
    padding-top: 5px;
    font-size: 0.9rem;
    color: ${theme.Green};
  }
`

export const Buttons = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  .showMoreButton {
    ${infoButton}
    background-color: ${theme.TransparentBlack};
  }
`

export const ThreeButtons = styled.div`
  padding: 5px 0;
  display: flex;

  a {
    ${infoButton}
    background-color: ${theme.TransparentBlack};
  }

  a:first-child {
    color: ${theme.Black};
    border: 1px solid ${theme.White};
    background-color: ${theme.White};
  }
`

export const LeftButton = styled.button`
  left: 0;
  top: 35%;
  opacity: 0;
  z-index: 10;
  ${flexCenter}
  border: none;
  padding: 10px;
  font-size: 2rem;
  position: absolute;
  color: ${theme.White};
  background-color: transparent;
`

export const RightButton = styled.button`
  right: 0;
  top: 35%;
  opacity: 0;
  z-index: 10;
  ${flexCenter}
  border: none;
  padding: 10px;
  font-size: 2rem;
  position: absolute;
  color: ${theme.White};
  background-color: transparent;
`
