import { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
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
  const sliderRef = useRef<HTMLDivElement>(null)

  const [movies, setMovies] = useState<MovieType[] | null>(null)
  const getMovies = async () => {
    const response = await fetch(URL)
    const data = await response.json()
    setMovies(data.results)
  }

  const slideLeft = () => {
    if (sliderRef.current) {
      const slider = sliderRef.current
      slider.scrollLeft = slider.scrollLeft - 150
    }
  }
  const slideRight = () => {
    if (sliderRef.current) {
      const slider = sliderRef.current
      slider.scrollLeft = slider.scrollLeft + 150
    }
  }

  useEffect(() => {
    getMovies()
  }, [])

  return (
    <Container>
      <Caption>{name}</Caption>
      <LeftButton onClick={slideLeft}>
        <LeftArrow />
      </LeftButton>
      <Slider ref={sliderRef}>
        {movies?.map((movie) => (
          <Movie key={movie.id}>
            <Poster className="poster">
              {' '}
              <Link
                to={`/browse/${movie.id}`}
                className="posterWrapper"
                key={movie.id}
              >
                <Image
                  src={`https://image.tmdb.org/t/p/w500${movie?.backdrop_path}`}
                  alt="movie"
                />
              </Link>
            </Poster>

            <Info className="info">
              <Buttons>
                <ThreeButtons>
                  <Link to={`/browse/${movie.id}`} className="showMoreButton">
                    <PlayIcon />
                  </Link>
                  <Link to={`/browse/${movie.id}`} className="showMoreButton">
                    <PlusIcon />
                  </Link>
                  <Link to={`/browse/${movie.id}`} className="showMoreButton">
                    <LikeIcon />
                  </Link>
                </ThreeButtons>
                <Link to={`/browse/${movie.id}`} className="showMoreButton">
                  <ShowMoreIcon />
                </Link>
              </Buttons>

              <span>{movie.vote_average * 10}&#37; Match</span>
            </Info>
          </Movie>
        ))}
      </Slider>

      <RightButton onClick={slideRight}>
        <RightArrow />
      </RightButton>
    </Container>
  )
}
