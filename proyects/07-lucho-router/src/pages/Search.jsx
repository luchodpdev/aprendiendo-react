import { useEffect } from "react"

export default function SearchPage ({ routeParams }) {
    useEffect(() => {
        document.title = `Has Buscado ${routeParams.query}`

    }, [])
    return (
        <h1>Has buscado {routeParams.query}</h1>
    )
}