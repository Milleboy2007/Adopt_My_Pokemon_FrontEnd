import { useLoaderData } from 'react-router-dom'
import './catalogue.css'
import pokemonsLoader from '../loaders/pokemons.loader'

function Catalogue() {
  const pokemons = useLoaderData()

  return (
    <>
    <p>
      Catalogue
    </p>
    </>
  )
}

export default Catalogue