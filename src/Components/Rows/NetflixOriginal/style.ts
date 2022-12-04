import styled from 'styled-components'

export const Container = styled.div`
  margin-top: -100px;
`
export const Slider = styled.div`
  display: flex;
  overflow-x: auto;
  margin-top: -3rem;
  padding: 3rem 3rem;
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
  margin-right: 8px;
  border-radius: 4px;
  flex-direction: column;
  background-color: #1d1c1c;
  transition: all 0.2s ease;

  :hover {
    z-index: 5;
    transform: scale(1.05);
    box-shadow: 0 5px 10px rgba(0, 0, 0, 0.1), 0 5px 10px rgba(0, 0, 0, 0.1);
  }
`
export const Poster = styled.div`
  width: 15rem;
  height: 23rem;
`
export const Image = styled.img`
  width: 100%;
  height: 100%;
  border-radius: 4px;
`

export const Info = styled.div`
  display: none;
`
