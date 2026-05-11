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
  const [nom, setNom] = useState("")

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
    await newInteraction(poke.id, action, user.id)
    reload()
  }

  return (
    <>
      <div className='dashboard'>
        <div className='pokeList'>
          <h1>Mes Pokémon - Ranch de {user.email}</h1>
          <div className='recherche'>
            <input placeholder='Nom du Pokemon' onChange={value => setNom(value.target.value)}/>
          </div>
          <MyPokeList cards={pokeList.filter(poke => poke.nom.toLowerCase().includes(nom.toLowerCase()) || poke.pseudo.toLowerCase().includes(nom.toLowerCase()))} selectPoke={poke => selectPoke(poke)}/>
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