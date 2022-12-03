import { useState } from 'react'
import { InfoIcon, MutedIcon, PlayIcon, SoundIcon } from '../../utilities'
import { Fade } from '../Fade/Fade'
import {
  ButtonWrapper,
  InfoButton,
  Overlay,
  PlayButton,
  Trailer,
  PrimaryWrapper,
  SecondaryWrapper,
  MuteButton,
  SVG,
  Container,
  Title,
} from './style'

export function Banner() {
  const [isMuted, setIsMuted] = useState(false)

  const VIDEO = '/trailer.mp4'

  return (
    <Container>
      <PrimaryWrapper>
        <Trailer src={VIDEO} loop autoPlay muted={isMuted} />
        <Overlay />
      </PrimaryWrapper>
      <SecondaryWrapper>
        <div>
          <Title src="/squid-game-logo.webp" alt="" />
          <ButtonWrapper>
            <PlayButton>
              <SVG>
                <PlayIcon />
              </SVG>
              Play
            </PlayButton>
            <InfoButton>
              <SVG>
                <InfoIcon />
              </SVG>
              More Info
            </InfoButton>
          </ButtonWrapper>
        </div>
        <MuteButton
          className="trailer__mute"
          onClick={() => setIsMuted(!isMuted)}
        >
          {isMuted ? <MutedIcon /> : <SoundIcon />}
        </MuteButton>
      </SecondaryWrapper>
      <Fade />
    </Container>
  )
}
