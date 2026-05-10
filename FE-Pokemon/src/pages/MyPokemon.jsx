import { useLoaderData } from 'react-router-dom'
import './myPokemon.css'
import MyPokeList from '../components/MyPokemon/MyPokeList'
import { useState } from 'react'

function MyPokemon() {
  const {user, pokemons} = useLoaderData()
  const [poke, setPoke] = useState()

  function selectPoke(selec){
    if(selec != poke){
      setPoke(selec)
    }else setPoke(undefined)
  }

  return (
    <>
      <div className='dashboard'>
        <div className='pokeList'>
          <h1>Mes Pokémon - Ranch de {user.email}</h1>
          <MyPokeList cards={pokemons} selectPoke={poke => selectPoke(poke)}/>
        </div>
        <div className='pokeDetail'>
          {poke ?
            <p>{poke.nom}</p>:
            <p>Clické sur un pokemon pour le sélectionner</p>
          }
        </div>
      </div>
    </>
  )
}

export default MyPokemon