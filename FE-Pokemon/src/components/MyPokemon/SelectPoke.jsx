import { useState } from 'react'
import './selectPoke.css'
import { changePokePseudo, resetPokePseudo } from '../../services/api'

function SelectPoke({poke, act, reload}) {
  const [isInChange, setIsInChange] = useState(false)
  const [pseudo, setPseudo] = useState(poke.pseudo)

  return (
    <div>
      <div className='presentation'>
          {!isInChange?
            <>
              <h1>{poke.pseudo? `${poke.pseudo} (${poke.nom})`: poke.nom}</h1>
              <button onClick={() => setIsInChange(true)}>✏️</button>
            </>:
            <>
              <input onChange={e => setPseudo(e.target.value)} type='texte'/>
              <button onClick={async () => {
                if(pseudo.trim() != ""){
                  await changePokePseudo(poke.id, pseudo)
                  reload()
                }
                setIsInChange(false)
              }}>✅</button>
              <button onClick={() => setIsInChange(false)}>❌</button>
              <button onClick={async () => {
                setPseudo("")
                await resetPokePseudo(poke.id)
                reload()
                setIsInChange(false)
              }}>🔄️</button>
            </>
          }
        <img src={poke.img} alt={poke.nom}/>
      </div>

      <div className='stats'>
        <p>Level: {poke.niveau}</p>
        <p>Points Interaction: {poke.pointsInteraction}</p>
        <p>Type: {poke.type.join(', ')}</p>
      </div>

      <div className='interaction'>
        <button onClick={() => act("nourri")}>Donner une Baie</button>
        <button onClick={() => act("joue")}>Jouer</button>
        <button onClick={() => act("caresse")}>Caresse</button>
      </div>
    </div>
  )
}

export default SelectPoke