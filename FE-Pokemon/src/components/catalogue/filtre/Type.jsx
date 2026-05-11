import { useState } from 'react'
import './type.css'

const POKE_TYPES = [
  "normal",
  "fire",
  "water",
  "grass",
  "electric",
  "ice",
  "fighting",
  "poison",
  "ground",
  "flying",
  "psychic",
  "bug",
  "rock",
  "ghost",
  "dragon",
  "dark",
  "steel",
  "fairy"
]

function Type(props) {
  const [typeActifs, setTypeActifs] = useState( props.valeurActuelle || [])

  function toggleType(typeClique) {
    let temp;
    if (typeActifs.includes(typeClique)) {
      temp = typeActifs.filter(t => t !== typeClique);
    } else {
      temp = [...typeActifs, typeClique];
    }
    
    setTypeActifs(temp);
    props.selectTypes(temp);
  }

  return (
    <div className="filtre-type">
      <legend>Types : </legend>
      <div className="badges-grid">
        {POKE_TYPES.map(type => {
          const estActif = typeActifs.includes(type);
          return (
            <button key={type}
                    className={`btn-type ${estActif ? `type-${type} actif` : 'inactif'}`}
                    onClick={() => toggleType(type)}
            >
              {type}
            </button>
          );
        })}
      </div>
    </div>
  )
}

export default Type