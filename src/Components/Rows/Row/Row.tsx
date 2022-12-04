import { useEffect, useState } from 'react'
import { MovieType } from '../../../library'
import {
  LeftArrow,
  LikeIcon,
  PlayIcon,
  PlusIcon,
  RightArrow,
  ShowMoreIcon,
} from '../../../utilities'
import {
  Container,
  Info,
  Movie,
  Poster,
  Slider,
  Image,
  Caption,
  ThreeButtons,
  Buttons,
  LeftButton,
  RightButton,
} from './style'

type RowProps = {
  URL: string
  name: string
}
export function Row({ URL, name }: RowProps) {
  const [movies, setMovies] = useState<MovieType[] | null>(null)
  const getMovies = async () => {
    const response = await fetch(URL)
    const data = await response.json()
    setMovies(data.results)
    console.log(data.results)
  }

  useEffect(() => {
    getMovies()
  }, [])

  return (
    <Container>
      <Caption>{name}</Caption>
      <LeftButton>
        <LeftArrow />
      </LeftButton>
      <Slider>
        {movies?.map((movie) => (
          <Movie key={movie.id}>
            <Poster className="poster">
              <Image
                src={`https://image.tmdb.org/t/p/w500${movie?.backdrop_path}`}
                alt="movie"
              />
            </Poster>
            <Info className="info">
              <Buttons>
                <ThreeButtons>
                  <button>
                    <PlayIcon />
                  </button>
                  <button>
                    <PlusIcon />
                  </button>
                  <button>
                    <LikeIcon />
                  </button>
                </ThreeButtons>
                <button>
                  <ShowMoreIcon />
                </button>
              </Buttons>

              <span>{movie.vote_average * 10}&#37; Match</span>
            </Info>
          </Movie>
        ))}
      </Slider>

      <RightButton>
        <RightArrow />
      </RightButton>
    </Container>
  )
}
