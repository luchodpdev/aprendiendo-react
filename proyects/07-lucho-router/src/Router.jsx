import { EVENTS } from "./consts"
import { useState, useEffect, Children } from "react"
import { match } from 'path-to-regexp'
import { Route } from "./Route"
import { getCurrentPath } from "./utils"


export function Router ({ children, routes = [], defaultComponent: DefatulComponent = () => <h1>Error 404</h1> }) {
    const [currentPath, setCurrentPath] = useState(getCurrentPath)
  
    useEffect(() => {
      const onLocationChange = () => {
        setCurrentPath(getCurrentPath)
      }
  
      window.addEventListener(EVENTS.PUSHSTATE, onLocationChange)
      window.addEventListener(EVENTS.POPSTATE, onLocationChange)
  
      return () => {
        window.removeEventListener(EVENTS.PUSHSTATE, onLocationChange)
        window.removeEventListener(EVENTS.POPSTATE, onLocationChange)
      }
  
    }, [])

    let routeParams = {}

    // add routes from children <Route /> componentes
    const routesFromChildren = Children.map(children, ({ props, type }) => {
      const { name } = type
      const isRoute = name === 'Route'

      return isRoute ? props : null
})

    const routesToUse = routes.concat(routesFromChildren).filter(Boolean)
  
    const Page = routesToUse.find(({ path }) => {
       if (path === currentPath) return true

       // hemos usado path-to-regexp
       //para poder detectar rutas dinamicas por ejemplo
       // /search/:query <- :query es una ruta dinámica
    const matcherUrl = match(path, { decode: decodeURIComponent })
    const matched = matcherUrl(currentPath)
    if (!matched) return false

    // guardar los parámetros de la url que eran dinámicos
    // y que hemos extraído con la path-to-regexp
    // por ejemplo, si la ruta es /search/:query
    // y la url es /search/javascript
    // matched.params.query === 'javascript'
    routeParams = matched.params // { query: 'javscript' } // /search/javascript
    return true

})?.Component

    return Page 
    ? <Page routeParams={routeParams} /> 
    : <DefatulComponent routeParams={routeParams} />
  }