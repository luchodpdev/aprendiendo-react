import { Link } from '../Link.jsx'

export default function AboutPage () {
    return (
      <>
        <h1>About</h1>
        <div>
        <img src='https://avatars.githubusercontent.com/u/175343253?s=96&v=4' />
        <p>¡Hola! Soy Luciano De Pasquale y estoy creando un clon de React Router </p>
        </div>
        <Link to='/'>Ir a la Home</Link>
      </>
    )
  }