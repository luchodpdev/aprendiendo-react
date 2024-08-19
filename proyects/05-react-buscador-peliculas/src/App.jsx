import './App.css'
import { Movies } from './components/Movies.jsx'
import { useMovies } from './hooks/useMovies.js'
import { useEffect, useState } from 'react'

function App() {
  const { movies } = useMovies()
  const [query, setQuery] = useState('')
  const [error, setError] = useState(null)

  const handleChange = (event) => {
    const newQuery = event.target.value
    if (newQuery.startsWith(' ')) return
    setQuery(event.target.value)
  }
  
  const handleSubmit = (event) => {
    event.preventDefault()
  }

  useEffect(() => {
    if (query === '') {
      setError('No se puede buscar una pelicula vacía')
      return
    }
  
    setError(null)

  }, [query])

  return (
    <div className='page'>
  
      <header>
        <h1>Buscador de películas</h1>
        <form className='form' onSubmit={handleSubmit}>
          <input onChange={handleChange} value={query} name='query' placeholder='Avengers, The Matrix, Starwars' />
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
