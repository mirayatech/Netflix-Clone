import { useEffect, useState } from 'react'
import { MovieType } from '../../../library'
import { LikeIcon, PlayIcon, PlusIcon, ShowMoreIcon } from '../../../utilities'
import { Container, Info, Movie, Poster, Slider, Image, Caption } from './style'

import './row-style.css'

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
      <button>left</button>
      <Slider>
        {movies?.map((movie) => (
          <Movie key={movie.id}>
            <Poster>
              <Image
                src={`https://image.tmdb.org/t/p/w500${movie?.backdrop_path}`}
                alt="movie"
              />
            </Poster>
            <Info>
              <div>
                <div>
                  <button>
                    <PlayIcon />
                  </button>
                  <button>
                    <PlusIcon />
                  </button>
                  <button>
                    <LikeIcon />
                  </button>
                </div>
                <button>
                  <ShowMoreIcon />
                </button>
              </div>
              <h1> {movie.original_name}</h1>
              <span>{movie.vote_average * 10}&#37; Match</span>
            </Info>
          </Movie>
        ))}
      </Slider>

      <button>Right</button>
    </Container>
  )
}
