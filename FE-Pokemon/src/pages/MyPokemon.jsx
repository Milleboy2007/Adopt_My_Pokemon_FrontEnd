import { useActionData, useLoaderData } from 'react-router-dom'
import './myPokemon.css'
import MyPokeList from '../components/MyPokemon/MyPokeList'
import { useState } from 'react'
import SelectPoke from '../components/MyPokemon/SelectPoke'
import { getMyPokemon, getSinglePokemon, newInteraction } from '../services/api'

function MyPokemon() {
  const {user, pokemons} = useLoaderData()
  const [pokeList, setPokeList] = useState(pokemons)
  const [poke, setPoke] = useState()

  function selectPoke(selec){
    if(selec != poke){
      setPoke(selec)
    }else setPoke(undefined)
  }

  async function reload(){
    setPoke(await getSinglePokemon(poke.id))
    setPokeList(await getMyPokemon(user.id))
  }

  async function interagire(action){
    console.log(action)
    await newInteraction(poke.id, action, user.id)
    reload()
  }

  return (
    <>
      <div className='dashboard'>
        <div className='pokeList'>
          <h1>Mes Pokémon - Ranch de {user.email}</h1>
          <MyPokeList cards={pokeList} selectPoke={poke => selectPoke(poke)}/>
        </div>
        <div className='pokeDetail'>
          {poke ?
            <SelectPoke poke={poke} act={action => interagire(action)} reload={reload}/>:
            <p>Clické sur un pokemon pour le sélectionner</p>
          }
        </div>
      </div>
    </>
  )
}

export default MyPokemon