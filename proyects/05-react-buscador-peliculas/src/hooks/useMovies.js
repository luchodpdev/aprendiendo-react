import withResutls from '../mocks/withResutls.json'
import withoutResults from '../mocks/noResults.json'
import { useState } from 'react'

export function useMovies ({ search }) {
    const [responseMovies, setResponseMovies] = useState([])
    const movies = responseMovies.Search
  
    const mappedMovies = movies?.map(movie => ({
      id: movie.imdbID,
      title: movie.Title,
      year: movie.Year,
      poster: movie.Poster
    }))

    const getMovies = () => {
      if (search) {
        setResponseMovies(withResutls)
      } else {
        setResponseMovies(withoutResults)
      }
    }
    return { movies: mappedMovies, getMovies }
  }
  