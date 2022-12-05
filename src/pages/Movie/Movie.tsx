import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { Navbar } from '../../Components'
import { MovieType } from '../../library'
import { LikeIcon, PlayIcon, PlusIcon } from '../../utilities'
import {
  Container,
  Poster,
  Image,
  Info,
  Tags,
  Tag,
  Overview,
  Buttons,
  Title,
  Actions,
} from './style'

export function Movie() {
  const { id } = useParams()
  const [movie, setMovie] = useState<MovieType>()

  const getMovie = async () => {
    const response =
      await fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=${
        import.meta.env.VITE_APP_TMBD_API
      }&language=en-US
`)
    const data = await response.json()
    console.log(data)
    setMovie(data)
  }

  useEffect(() => {
    getMovie()
  }, [])

  return (
    <div>
      <Navbar />

      {movie ? (
        <Container style={{ color: '#fff', paddingTop: '100px' }}>
          <Poster>
            <Image
              src={`https://image.tmdb.org/t/p/w500${movie?.poster_path}`}
              alt="movie"
            />
          </Poster>

          <Info>
            <Title>{movie.original_title}</Title>
            <Tags>
              <Tag>{movie?.vote_average * 10}&#37; </Tag>
              <Tag>{movie.release_date}</Tag>
              <Tag>{movie.status}</Tag>
            </Tags>
            <Overview>{movie.overview}</Overview>{' '}
            <Buttons>
              <button>
                <PlayIcon />
              </button>
              <button>
                <PlusIcon />
              </button>
              <button>
                <LikeIcon />
              </button>
            </Buttons>
          </Info>
        </Container>
      ) : (
        ''
      )}
    </div>
  )
}
