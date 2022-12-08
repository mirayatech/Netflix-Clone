import { doc, setDoc } from 'firebase/firestore'
import { useEffect, useState } from 'react'
import toast from 'react-hot-toast'
import { Link, useParams } from 'react-router-dom'
import { Footer, Navbar } from '../../Components'
import { useAuthContext } from '../../Context'
import { firebaseDb, MovieType, MovieVideoType } from '../../library'
import { theme } from '../../styles'
import { LikeIcon, PlayIcon, PlusIcon } from '../../utilities'
import {
  Error,
  Container,
  Poster,
  Image,
  Info,
  Tags,
  Tag,
  Overview,
  Buttons,
  Title,
} from './style'

export function Movie() {
  const { id } = useParams()
  const [movie, setMovie] = useState<MovieType>()
  const [movieVideo, setMovieVideo] = useState<MovieVideoType[]>()

  const { user } = useAuthContext()

  const getMovie = async () => {
    const response =
      await fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=${
        import.meta.env.VITE_APP_TMBD_API
      }&language=en-US
`)
    const data = await response.json()
    setMovie(data)
  }

  const getVideo = async () => {
    const response = await fetch(
      `https://api.themoviedb.org/3/movie/${id}/videos?api_key=${
        import.meta.env.VITE_APP_TMBD_API
      }&language=en-US`
    )
    const data = await response.json()
    console.log(data.results.slice(0, 1))
    setMovieVideo(data.results.slice(0, 1))
  }

  useEffect(() => {
    getMovie()
    getVideo()
  }, [])

  const saveMovieToMyList = async () => {
    const favoritesCollectionReference = doc(
      firebaseDb,
      `users/${user?.uid}/myList/${movie?.id} `
    )

    await setDoc(favoritesCollectionReference, {
      id: movie?.id,
      title: movie?.original_title,
      poster: movie?.poster_path,
    })
    toast('Added to My List', {
      icon: '🥳',
      style: {
        borderRadius: '10px',
        background: theme.CardColor,
        color: '#fff',
      },
    })
  }
  return (
    <div>
      <Navbar />

      {movie ? (
        <Container>
          <Poster>
            <Image
              src={`https://image.tmdb.org/t/p/w500${movie?.poster_path}`}
              alt="movie"
            />
          </Poster>

          <Info>
            <Title>{movie.original_title}</Title>
            <Tags>
              {movie.vote_average > 0 && (
                <Tag>{movie.vote_average * 10}&#37; </Tag>
              )}
              {movie.release_date && <Tag>{movie.release_date}</Tag>}
              {movie.status && <Tag>{movie.status}</Tag>}
            </Tags>
            <Overview>{movie.overview}</Overview>{' '}
            <Buttons>
              {movieVideo?.map((video) => (
                <a
                  target="_blank"
                  href={`https://www.youtube.com/watch?v=${video.key}`}
                >
                  <PlayIcon />
                </a>
              ))}

              <button onClick={saveMovieToMyList}>
                <PlusIcon />
              </button>
              <button>
                <LikeIcon />
              </button>
            </Buttons>
          </Info>
        </Container>
      ) : (
        <Error>Not Found</Error>
      )}

      <Footer />
    </div>
  )
}
