export const NETFLIX_ORIGINAL = `https://api.themoviedb.org/3/discover/tv?api_key=${
  import.meta.env.VITE_APP_TMBD_API
}&with_networks=213`

export const TOP_RATED = `https://api.themoviedb.org/3/movie/top_rated?api_key=${
  import.meta.env.VITE_APP_TMBD_API
}&language=en-US&page=1`

export const UPCOMING = `https://api.themoviedb.org/3/movie/upcoming?api_key=${
  import.meta.env.VITE_APP_TMBD_API
}&language=en-US&page=1`

export const ACTION = `https://api.themoviedb.org/3/discover/movie?api_key=${
  import.meta.env.VITE_APP_TMBD_API
}&with_genres=28`

export const COMEDY = `https://api.themoviedb.org/3/discover/movie?api_key=${
  import.meta.env.VITE_APP_TMBD_API
}&with_genres=35`

export const HORROR = `https://api.themoviedb.org/3/discover/movie?api_key=${
  import.meta.env.VITE_APP_TMBD_API
}&with_genres=27`

export const ROMANCE = `https://api.themoviedb.org/3/discover/movie?api_key=${
  import.meta.env.VITE_APP_TMBD_API
}&with_genres=10749`
