import { useState, useEffect } from 'react'
import './selectPoke.css'
import { changePokePseudo, resetPokePseudo } from '../../services/api'

function SelectPoke({ poke, act, reload }) {
  const [isInChange, setIsInChange] = useState(false)
  const [pseudo, setPseudo] = useState(poke.pseudo)

  useEffect(() => {
    setPseudo(poke.pseudo)
    setIsInChange(false)
  }, [poke])

  const ptsMin = Math.floor(200 * (Math.pow(1.5, poke.niveau - 1) - 1));
  const ptsMax = Math.floor(200 * (Math.pow(1.5, poke.niveau) - 1));
  const xpActuelle = poke.pointsInteraction - ptsMin;
  const xpTotaleNiveau = ptsMax - ptsMin;

  return (
    <div className="selected-pokemon">
      
      <div className='header-pseudo'>
          {!isInChange ? (
            <>
              <h1>{poke.pseudo ? `${poke.pseudo} (${poke.nom})` : poke.nom}</h1>
              <button className="btn-icon" onClick={() => setIsInChange(true)}>✏️</button>
            </>
          ) : (
            <div className="edit-bar">
              <input value={pseudo} onChange={e => setPseudo(e.target.value)} type='text' />
              <button onClick={async () => {
                if (pseudo.trim() !== "") {
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
            </div>
          )}
      </div>

      <div className="big-image-container">
        <img src={poke.img} alt={poke.nom} className="floating-poke" />
      </div>

      <div className='badges-ligne'>
        {poke.type.map(type => (
          <span className={`type-badge type-${type}`} key={type}>{type}</span>
        ))}
        <span className="info-badge">{poke.grandeur * 10} cm</span>
        <span className="info-badge">{poke.poids / 10} kg</span>
      </div>

      <div className='controls-grid'>
        
        <div className='jauges-box'>
          <div className="jauge-item">
            <div className="jauge-label">
              <label>Niveau (Level)</label>
              <span>Lvl {poke.niveau}</span>
            </div>
            <progress className="barre-bleue" max="30" value={poke.niveau}></progress>
          </div>

          <div className="jauge-item">
            <div className="jauge-label">
              <label>Points d'interaction</label>
              <span>{poke.pointsInteraction} pts</span>
            </div>
            <progress className="barre-verte" max={xpTotaleNiveau} value={xpActuelle}></progress>
          </div>
        </div>

        <div className='interaction-box'>
          <button className="btn-interaction" onClick={() => act("nourri")}>Donner une Baie 🍇</button>
          <button className="btn-interaction" onClick={() => act("joue")}>Jouer ⚽</button>
          <button className="btn-interaction" onClick={() => act("caresse")}>Caresse 👋</button>
        </div>

      </div>

    </div>
  )
}

export default SelectPoke