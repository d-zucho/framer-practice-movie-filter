import { API } from './api'

const api_key = API

export const fetchPopilarMovies = async () => {
  const data = await fetch(
    `https://api.themoviedb.org/3/movie/popular?api_key=${api_key}&language=en-US&page=1`
  )
  const movies = await data.json() //json() is a method of the Response interface to parse the body of the response as JSON
}
