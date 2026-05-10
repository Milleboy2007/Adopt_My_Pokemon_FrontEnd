import { useLoaderData } from 'react-router-dom'
import './myPokemon.css'

function MyPokemon() {
  const {user, pokemons} = useLoaderData()
  return (
    <>
      <div className='dashboard'>
        <div className='pokeList'>
          <h1>Mes Pokémon - Ranch de {user.email}</h1>
          {pokemons.map(poke => <p>{poke.nom}</p> )}
        </div>
        <div className='pokeDetail'>
          <p>Clické sur un pokemon pour le sélectionner</p>
        </div>
      </div>
    </>
  )
}

export default MyPokemon