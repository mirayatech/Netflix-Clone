import { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import { MovieType, NETFLIX_ORIGINAL } from '../../../library'
import {
  LeftArrow,
  LikeIcon,
  PlayIcon,
  PlusIcon,
  RightArrow,
  ShowMoreIcon,
} from '../../../utilities'
import {
  Movie,
  Poster,
  Image,
  Info,
  Slider,
  Container,
  LeftButton,
  Buttons,
  ThreeButtons,
  RightButton,
} from './style'

export function NetflixOriginal() {
  const sliderRef = useRef<HTMLDivElement>(null)

  const [movies, setMovies] = useState<MovieType[] | null>(null)
  const getNetflixOriginals = async () => {
    const response = await fetch(NETFLIX_ORIGINAL)
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
    getNetflixOriginals()
  }, [])

  return (
    <Container>
      <LeftButton onClick={slideLeft}>
        <LeftArrow />
      </LeftButton>
      <Slider ref={sliderRef}>
        {movies?.map((movie) => (
          <Movie key={movie.id}>
            <Link to={`/browse/${movie.id}`}>
              <Poster className="poster">
                <Image
                  src={`https://image.tmdb.org/t/p/w500${movie?.poster_path}`}
                  alt="movie"
                />
              </Poster>
            </Link>
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
