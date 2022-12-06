export type MovieType = {
  poster_path: string
  backdrop_path: string
  genre_ids: []
  id: number
  original_title: string
  overview: string
  vote_average: number
  release_date: string
  status: string
}

export type UserType = {
  name: string
  email: string
  password: string
  id: string
}

export type MovieVideoType = {
  id: string
  key: string
}

export type MyListType = {
  id: number
  poster: string
  title: string
}
