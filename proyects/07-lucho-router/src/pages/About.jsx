import { Link } from '../Link.jsx'

const i18n = {
  es: {
    title: 'Sobre nosotros',
    button: 'Ir a la Home',
    description: '¡Hola! Soy Luciano Miguel De Pasquale y estoy creando un clon de React Router con el curso de Midudev.'
  },
  en: {
    title: 'About us',
    button: 'Go to Home Page',
    description: '¡Hi! My name is Luciano Miguel De Pasquale and I am creatin a clone of React Router with midudev react course'
  }
}

const useI18N = (lang) => {
  return i18n[lang] || i18n.en
}

export default function AboutPage ({ routeParams }) {
    const i18n = useI18N(routeParams.lang ?? 'es')

    return (
      <>
        <h1>{i18n.title}</h1>
        <div>
        <img src='https://avatars.githubusercontent.com/u/175343253?s=96&v=4' />
        <p>{i18n.description}</p>
        </div>
        <Link to='/'>{i18n.button}</Link>
      </>
    )
  }