import {
  collection,
  CollectionReference,
  deleteDoc,
  doc,
  DocumentReference,
  onSnapshot,
} from 'firebase/firestore'
import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { Footer, Navbar } from '../../Components'
import { useAuthContext } from '../../Context'
import { firebaseDb, MyListType, UserType } from '../../library'
import { Container, Movies, MyListWrapper, Poster, TitleWrapper } from './style'

export function MyList() {
  const [isUser, setIsUser] = useState<UserType | null>(null)
  const [movies, setMovies] = useState<MyListType[]>([])
  const { user } = useAuthContext()

  const userDocumentRef = doc(
    firebaseDb,
    `users/${user?.uid}`
  ) as DocumentReference<UserType>

  useEffect(
    () =>
      onSnapshot(userDocumentRef, (doc) => {
        const docData = doc.data()
        if (docData) {
          setIsUser(docData)
        }
      }),

    [user?.uid]
  )

  const movieCollectionRef = collection(
    firebaseDb,
    `users/${user?.uid}/myList`
  ) as CollectionReference<MyListType>

  useEffect(() => {
    const getProfile = () => {
      onSnapshot(movieCollectionRef, (snapshot) => {
        setMovies(
          snapshot.docs.map((doc) => ({ ...doc.data(), movieId: doc.id }))
        )
      })
    }

    getProfile()
  }, [])

  return (
    <Container>
      <Navbar />
      <MyListWrapper>
        <TitleWrapper>
          <h1> {isUser?.name}'s list</h1>

          <h2>Total: {movies.length}</h2>
        </TitleWrapper>

        <Movies>
          {movies.map((movie) => (
            <div key={movie.id}>
              <Poster>
                <img
                  src={`https://image.tmdb.org/t/p/w500${movie.poster}`}
                  alt=""
                />
              </Poster>
              <Link to={`/browse/${movie.id}`}>
                <h3>{movie.title}</h3>
              </Link>
            </div>
          ))}
        </Movies>
      </MyListWrapper>
      <Footer />
    </Container>
  )
}
