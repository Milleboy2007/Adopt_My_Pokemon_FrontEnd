import { useLoaderData } from 'react-router-dom'
import './catalogue.css'
import PokeList from '../components/catalogue/PokeList'
import { useState, useEffect } from 'react'
import Type from '../components/catalogue/filtre/Type'
import Poids from '../components/catalogue/filtre/Poids'
import Taille from '../components/catalogue/filtre/Taille'
import Prix from '../components/catalogue/filtre/Prix'

function useSessionStorage(key, initialValue){
  const [storedValue, setStoredValue] = useState(() => {
    try{
      const keepFilters = window.sessionStorage.getItem("keep_filters") === "true"

      if(keepFilters){
        const item = window.sessionStorage.getItem(key)
        return item ? JSON.parse(item): initialValue
      }else return initialValue
    }catch (e){
      console.error(e)
      return initialValue
    }
  })

  useEffect(() => {
    try{
      window.sessionStorage.setItem(key, JSON.stringify(storedValue))
    }catch (e){
      console.error(e)
    }
  }, [key, storedValue])

  return [storedValue, setStoredValue]
}

function Catalogue() {
  const pokemons = useLoaderData()
  const [trie, setTrie] = useSessionStorage("cat_trie", "default")
  const [type, setType] = useSessionStorage("cat_type", [])
  const [poids, setPoids] = useSessionStorage("cat_poids", {"param": ">=", "value": 0})
  const [taille, setTaille] = useSessionStorage("cat_taille", {"param": ">=", "value": 0})
  const [prix, setPrix] = useSessionStorage("cat_prix", {"param": ">=", "value": 0})
  const [nom, setNom] = useSessionStorage("cat_nom", "")

  useEffect(() => {
    sessionStorage.removeItem("keep_filters");
  }, []);

  if (!pokemons){
    return (
      <div>
        <p>Aucun Pokémon à adopter</p>
      </div>
    )
  }
  
  let pokeTrieList = pokemons
  if(trie === "recent"){
    pokeTrieList = pokeTrieList.toReversed()
  }else if(trie === "priceUp"){
    pokeTrieList = pokeTrieList.toSorted((a, b) => a.prix - b.prix)
  }else if(trie === "priceDown"){
    pokeTrieList = pokeTrieList.toSorted((a, b) => b.prix - a.prix)
  }else if(trie === "alpha"){
    pokeTrieList = pokeTrieList.toSorted((a, b) => a.nom.localeCompare(b.nom))
  }

  const param = {
    ">=": (a, b) => a >= b,
    "<=": (a, b) => a <= b,
    "==": (a, b) => a === b
  }

  const pokeFiltrer = pokeTrieList.filter(poke => poke.nom.toLowerCase().includes(nom.toLowerCase())
                          && type.every(t => poke.type.includes(t))
                          && param[poids.param](poke.poids, poids.value)
                          && param[taille.param](poke.grandeur, taille.value)
                          && param[prix.param](poke.prix, prix.value))
                          
  let listFinal = pokeFiltrer

  return (
      <div>
        <div className='champ'>
          <div className='recherche'>
            <input placeholder='Nom du Pokemon' value={nom} onChange={value => setNom(value.target.value)}/>
          </div>

          <div className='trie'>
            <legend>Trié par: </legend>
            <select name='trie' value={trie} onChange={o => setTrie(o.target.value)}>
              <option value="default">Plus vieil ajout</option>
              <option value="recent">Plus récent ajout</option>
              <option value="priceUp">Prix croissant</option>
              <option value="priceDown">Prix décroissant</option>
              <option value="alpha">Alphabétique</option>
            </select>
          </div>

          <div className='filtre'>
            <p>Filtrer par:</p>
            <Type selectTypes={t => setType(t)} valeurActuelle={type}/>
            <Poids selectPoids={(param, value) => setPoids({"param": param, "value":value})} valeurActuelle={poids}/>
            <Taille selectTaille={(param, value) => {setTaille({"param": param, "value":value})}} valeurActuelle={taille}/>
            <Prix selectPrix={(param, value) => setPrix({"param": param, "value":value})} valeurActuelle={prix}/>
          </div>
        </div>

        <div className='list'>
          <PokeList cards={listFinal}/>
        </div>
      </div>
  )
}

export default Catalogue