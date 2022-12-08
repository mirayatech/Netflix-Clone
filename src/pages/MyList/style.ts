import styled from 'styled-components'
import { theme } from '../../styles/theme'

export const Container = styled.div`
  /* display: flex;
  flex-direction: column;
  justify-content: space-between; */
`

export const MyListWrapper = styled.div`
  margin: auto;
  display: flex;
  padding: 15px;
  max-width: 2200px;
  justify-content: center;
  flex-direction: column;
`

export const TitleWrapper = styled.div`
  display: flex;
  padding: 30px 15px;
  padding-top: 100px;
  align-items: center;
  justify-content: space-between;

  h1 {
    font-weight: 600;
    font-size: calc(26 / 16 * 1rem);
  }

  h2 {
    font-weight: 600;
    font-size: calc(26 / 16 * 1rem);
  }

  @media screen and (max-width: 548px) {
    line-height: 2;
    padding-top: 60px;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
`

export const Movies = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, 15rem);

  a {
    color: ${theme.White};
    :hover {
      color: ${theme.Red};
    }
  }

  h3 {
    width: 14rem;
    padding: 5px 10px;
    font-size: calc(18 / 16 * 1rem);
    transition: all 0.3s ease;
  }

  @media screen and (max-width: 548px) {
    align-items: center;
    justify-content: center;
    text-align: center;

    h3 {
      margin-bottom: 20px;
    }
  }
`

export const Poster = styled.div`
  width: 14rem;
  height: 20rem;
  display: flex;
  flex-shrink: 0;
  margin: 0 10px;
  position: relative;
  flex-direction: column;
  transition: all 0.3s ease;

  img {
    border-radius: 4px;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  button {
    top: 10px;
    right: 10px;
    padding: 6px;
    border: none;
    display: flex;
    cursor: pointer;
    font-size: 1.2rem;
    position: absolute;
    border-radius: 4px;
    border: 1px solid ${theme.White};
    color: ${theme.Red};
    transition: all 0.3s ease;
    background-color: ${theme.White};

    :hover {
      opacity: 0.8;
    }
  }
`
