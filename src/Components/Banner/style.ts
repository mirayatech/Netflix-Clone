import styled from 'styled-components'
import {
  bannerButtonDesktop,
  bannerButtonMobile,
  flexItemsCenter,
  theme,
} from '../../styles'

export const Container = styled.div`
  margin: auto;
  display: flex;
  position: relative;
  justify-content: center;
  flex-direction: column;
`

// Trailer

export const PrimaryWrapper = styled.div`
  position: relative;
`

export const Trailer = styled.video`
  width: 100vw;
  margin-top: -50px;

  @media screen and (min-width: 1650px) {
    margin-top: -80px;
  }
`

export const Overlay = styled.div`
  top: 0;
  position: absolute;
  background-color: #00000070;
  padding: 10px;
  width: 100%;
  height: 100%;
`

// Trailer Info, Buttons

export const SecondaryWrapper = styled.div`
  top: 250px;
  left: 30px;
  z-index: 30;
  width: 100%;
  margin: auto;
  display: flex;
  max-width: 2200px;
  position: absolute;
  padding: 10px 30px;
  align-items: baseline;
  justify-content: space-between;

  @media screen and (min-width: 2400px) {
    left: 150px;
  }

  @media screen and (max-width: 2240px) {
    left: 0;
  }

  @media screen and (max-width: 1700px) {
    top: 150px;
  }

  @media screen and (max-width: 1300px) {
    top: 80px;
  }

  @media screen and (max-width: 1000px) {
    top: 40px;
  }

  @media screen and (max-width: 600px) {
    top: 20px;
  }
`

export const ButtonWrapper = styled.div`
  display: flex;
  margin-top: 20px;
`

export const PlayButton = styled.button`
  margin-right: 10px;
  color: ${theme.Black};
  ${bannerButtonDesktop}
  background-color: ${theme.White};

  @media screen and (max-width: 800px) {
    ${bannerButtonMobile};
  }
`
export const InfoButton = styled.button`
  color: ${theme.White};
  ${bannerButtonDesktop};
  background-color: ${theme.TransparentGrey};

  @media screen and (max-width: 800px) {
    ${bannerButtonMobile};
  }
`

export const SVG = styled.span`
  font-size: 1.5rem;
  ${flexItemsCenter}
  margin-right: 3px;

  @media screen and (max-width: 800px) {
    font-size: 1rem;
  }
`

export const Title = styled.img`
  @media screen and (max-width: 1000px) {
    width: 500px;
  }

  @media screen and (max-width: 800px) {
    width: 400px;
  }

  @media screen and (max-width: 600px) {
    width: 300px;
  }
`

export const MuteButton = styled.button`
  border-radius: 50%;
  background-color: white;
  border: 1px solid ${theme.White};
  color: ${theme.White};
  padding: 15px;
  font-size: 1.5rem;
  ${flexItemsCenter}
  transition: all .2s ease;
  background-color: transparent;

  :hover {
    background-color: #ffffff28;
  }

  :active {
    background-color: #ffffff58;
  }

  @media screen and (max-width: 1000px) {
    padding: 12px;
    font-size: 1.2rem;
  }

  @media screen and (max-width: 600px) {
    padding: 10px;
    font-size: 1rem;
  }
`
