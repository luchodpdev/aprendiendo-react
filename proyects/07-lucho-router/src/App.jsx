
import './App.css'
import { Router } from './Router.jsx'
import Page404 from './pages/404.jsx'

import AboutPage from './pages/About.jsx'
import HomePage from './pages/Home.jsx'

const appRoutes = [
  {
    path: '/',
    Component: HomePage
  },
  {
    path: '/about',
    Component: AboutPage
  },
  {
    path: '/search/:query',
    Component: () => <h1>Buscador</h1>
  }
]

function App() {

  return (
    <main>
      <Router routes={appRoutes} defaultComponent={Page404} />
    </main>
  )
}

export default App
