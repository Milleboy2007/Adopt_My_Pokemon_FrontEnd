import { useLoaderData } from 'react-router-dom'
import './catalogue.css'
import Card from '../components/catalogue/Card'
import CardList from '../components/catalogue/CardList'

function Catalogue() {
  const pokemons = useLoaderData()

  return (
    <>
      <ul className='card-list'>
        <CardList cards={pokemons}/>
      </ul>
    </>
  )
}

export default Catalogue