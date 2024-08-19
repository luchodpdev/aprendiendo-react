import { useEffect, useState } from 'react'

// const CAT_ENDPOINT_IMAGE_URL = `https://cataas.com/cat/says/${firstWord}?fontSize=50&fontColor=red&json=true`
const CAT_PREFIX_IMAGE_URL = 'https://cataas.com'

export function useCatImage ({ fact }) {
  const [imageUrl, setImageUrl] = useState()

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
  return { imageUrl: `${CAT_PREFIX_IMAGE_URL}${imageUrl}` }
}
