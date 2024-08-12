import { useState, useEffect } from 'react'
import './App.css'
import { getRandomFact } from './services/facts'

// const CAT_ENDPOINT_IMAGE_URL = `https://cataas.com/cat/says/${firstWord}?fontSize=50&fontColor=red&json=true`
const CAT_PREFIX_IMAGE_URL = 'https://cataas.com'

export function App () {
  const [fact, setFact] = useState()
  const [imageUrl, setImageUrl] = useState()

  // para recuperar la cita al cargar la pagina
  useEffect(() => {
    getRandomFact().then(newFact => setFact(newFact))
  }, [])

  useEffect(() => {
    if (!fact) return

    const threeFirstWords = fact.split(' ', 3).join(' ')
    console.log(threeFirstWords)

    fetch(`https://cataas.com/cat/says/${threeFirstWords}?json=true`)
      .then(res => res.json())
      .then(response => {
        console.log(response)
        const { _id } = response
        console.log(_id)
        const url = `/cat/${_id}/says/${threeFirstWords}`
        setImageUrl(url)
      })
  }, [fact])

  const handleClick = async () => {
    const newFact = await getRandomFact()
    setFact(newFact)
  }

  return (
    <main>
      <h1>App de gatitos</h1>
      {fact && <p>{fact}</p>}
      {imageUrl && <img src={`${CAT_PREFIX_IMAGE_URL}${imageUrl}`} alt={`image extracted using the fisrt three words for ${fact}`} />}
      <button onClick={handleClick}>Get new fact</button>
    </main>
  )
}
