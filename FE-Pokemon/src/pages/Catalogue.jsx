import { useAsyncError, useLoaderData } from 'react-router-dom'
import './catalogue.css'
import PokeList from '../components/catalogue/PokeList'
import { useState, useEffect } from 'react'
import Type from '../components/catalogue/filtre/Type'
import Poids from '../components/catalogue/filtre/Poids'
import Taille from '../components/catalogue/filtre/Taille'
import Prix from '../components/catalogue/filtre/Prix'

function Catalogue() {
  const pokemons = useLoaderData()
  const [trie, setTrie] = useState("default")
  const [type, setType] = useState([])
  const [poids, setPoids] = useState({"param": ">=", "value": 0})
  const [taille, setTaille] = useState({"param": ">=", "value": 0})
  const [prix, setPrix] = useState({"param": ">=", "value": 0})
  const [nom, setNom] = useState("")

  
  if (!pokemons){
    return (
      <div>
        <p>Aucun Pokemon a Adopter</p>
      </div>
    )
  }
  
  let pokeTrieList = pokemons
  if(trie == "recent"){
    pokeTrieList = pokeTrieList.toReversed()
  }else if(trie == "priceUp"){
    pokeTrieList = pokeTrieList.toSorted((a, b) => a.prix - b.prix)
  }else if(trie == "priceDown"){
    pokeTrieList = pokeTrieList.toSorted((a, b) => b.prix - a.prix)
  }else if(trie == "alpha"){
    pokeTrieList = pokeTrieList.toSorted((a, b) => a.nom.localeCompare(b.nom))
  }

  const param = {
    ">=": (a, b) => a >= b,
    "<=": (a, b) => a <= b,
    "==": (a, b) => a === b
  }
  const pokeFiltrer = pokeTrieList.filter(poke => poke.nom.toLowerCase().includes(nom.toLowerCase()))
                          .filter(poke => type.every(t => poke.type.includes(t)))
                          .filter(poke => param[poids.param](poke.poids, poids.value))
                          .filter(poke => param[taille.param](poke.grandeur, taille.value))
                          .filter(poke => param[prix.param](poke.prix, prix.value))
  let listFinal = pokeFiltrer

  return (
      <div>
        <div className='champ'>
          <div className='recherche'>
            <input placeholder='Nom du Pokemon' onChange={value => setNom(value.target.value)}/>
          </div>

          <div className='trie'>
            <legend>Trié par: </legend>
            <select name='trie' onChange={o => setTrie(o.target.value)}>
              <option value="default">Plus vielle ajoue</option>
              <option value="recent">Plus récent ajoue</option>
              <option value="priceUp">Prix croissant</option>
              <option value="priceDown">Prix décroissant</option>
              <option value="alpha">Alphabétique</option>
            </select>
          </div>

          <div className='filtre'>
            <p>Filter par:</p>
            <Type selectTypes={t => setType(t)}/>
            <Poids selectPoids={(param, value) => setPoids({"param": param, "value":value})}/>
            <Taille selectTaille={(param, value) => {setTaille({"param": param, "value":value})}}/>
            <Prix selectPrix={(param, value) => setPrix({"param": param, "value":value})}/>
          </div>
        </div>

        <div className='list'>
          <PokeList cards={listFinal}/>
        </div>
      </div>
  )
}

export default Catalogue