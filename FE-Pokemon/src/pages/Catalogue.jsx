import { useAsyncError, useLoaderData } from 'react-router-dom'
import './catalogue.css'
import PokeList from '../components/catalogue/PokeList'
import { useState } from 'react'
import Type from '../components/catalogue/filtre/Type'
import Poids from '../components/catalogue/filtre/Poids'
import Taille from '../components/catalogue/filtre/Taille'
import Prix from '../components/catalogue/filtre/Prix'

function Catalogue() {
  const [trie, setTrie] = useState(null)
  const [filtre, setFiltre] = useState(null)
  const [type, setType] = useState([])
  const [poids, setPoids] = useState({"param": null, "value": 0})
  const [taille, setTaille] = useState({"param": null, "value": 0})
  const [prix, setPrix] = useState({"param": null, "value": 0})
  const pokemons = useLoaderData()
  
  if (!pokemons){
    return (
      <div>
        <p>Aucun Pokemon a Adopter</p>
      </div>
    )
  }

  const pokeTrier = pokemons
  const pokeFiltrer = pokeTrier

  function switchFiltre(filtre){
    switch (filtre) {
      case "type":
        setFiltre(<Type selectTypes={t => setType(t)}/>)
        break;
      case "poids":
        setFiltre(<Poids selectPoids={(param, value) => setPoids({"param": param, "value":value})}/>)
        break;
      case "taille":
        setFiltre(<Taille selectTaille={(param, value) => {setTaille({"param": param, "value":value})}}/>)
        break;
      case "prix":
        setFiltre(<Prix selectPrix={(param, value) => setPrix({"param": param, "value":value})}/>)
        break;
      default:
        setFiltre(null)
        break;
    }
  }

  return (
      <div>
        <div className='filtre-trie'>
          <legend>Trié par: </legend>
          <select name='trie' onChange={o => setTrie(o.target.value)}>
            <option value={null}>Plus vielle ajoue</option>
            <option value="recent">Plus récent ajoue</option>
            <option value="priceUp">Prix croissant</option>
            <option value="priceDown">Prix décroissant</option>
            <option value="alphabétique">Alphabétique</option>
          </select>

          <legend>Filtré par: </legend>
          <select name='filtre' onChange={o => switchFiltre(o.target.value)}>
            <option value={null}>Aucun</option>
            <option value="type">Type</option>
            <option value="poids">Poids</option>
            <option value="taille">Taille</option>
            <option value="prix">Prix</option>
          </select>
        </div>
        {filtre}
        <PokeList cards={pokeFiltrer}/>
      </div>
  )
}

export default Catalogue