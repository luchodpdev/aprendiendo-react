import './App.css'
import { Movies } from './components/Movies.jsx'
import { useMovies } from './hooks/useMovies.js'
import { useEffect, useState, useRef } from 'react'

function useSearch () {
  const [search, updateSearch] = useState('')
  const [error, setError] = useState(null)
  const isFirstInput = useRef(true)


  useEffect(() => {
    if (isFirstInput.current) {
      isFirstInput.current = search === ''
      return
    }

    if (search === '') {
      setError('No se puede buscar una pelicula vacía')
      return
    }

    if (search.match(/^\d+$/)) {
      setError('No se puede buscar una pelicula con un número')
      return
    }

    if (search.length < 3) {
      setError('La búsqueda debe tener al menos 3 caracteres')
      return
    }
  
    setError(null)

  }, [search])
  return { search, updateSearch, error }
}

function App() {
  const { search, updateSearch, error } = useSearch()
  const { movies, getMovies } = useMovies({ search })

  const handleChange = (event) => {
    updateSearch(event.target.value)
  }
  
  const handleSubmit = (event) => {
    event.preventDefault()
    getMovies()
  }

  

  return (
    <div className='page'>
  
      <header>
        <h1>Buscador de películas</h1>
        <form className='form' onSubmit={handleSubmit}>
          <input onChange={handleChange} value={search} name='query' placeholder='Avengers, The Matrix, Starwars' />
          <button type='submit' >Buscar</button>
        </form>
        {error && <p style={{ color: 'red', textAlign: 'center'}} >{error}</p>}

      </header>

      <main>
        <Movies movies={movies} />
      </main>
    </div>
  )
}

export default App
