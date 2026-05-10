import './selectPoke.css'

function SelectPoke({poke, act}) {

  return (
    <div>
      <div className='presentation'>
        <h1>{poke.pseudo? `${poke.pseudo} (${poke.nom})`: poke.nom}</h1>
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