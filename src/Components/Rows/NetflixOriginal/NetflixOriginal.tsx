import { useEffect, useState } from 'react'
import { MovieType, NETFLIX_ORIGINAL } from '../../../library'
import { LikeIcon, PlayIcon, PlusIcon, ShowMoreIcon } from '../../../utilities'
import { Movie, Poster, Image, Info, Slider, Container } from './style'

export function NetflixOriginal() {
  const [movies, setMovies] = useState<MovieType[] | null>(null)
  const getNetflixOriginals = async () => {
    const response = await fetch(NETFLIX_ORIGINAL)
    const data = await response.json()
    setMovies(data.results)
    console.log(data.results)
  }

  useEffect(() => {
    getNetflixOriginals()
  }, [])

  return (
    <Container>
      {/* <h1>Only on Netflix</h1> */}
      <button>left</button>
      <Slider>
        {movies?.map((movie) => (
          <Movie key={movie.id}>
            <Poster>
              <Image
                src={`https://image.tmdb.org/t/p/w500${movie?.poster_path}`}
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
