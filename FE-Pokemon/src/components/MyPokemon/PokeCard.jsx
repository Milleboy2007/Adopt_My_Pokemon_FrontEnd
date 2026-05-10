import './pokeCard.css'

function PokeCard({props, selectPoke, isActive}) {

  return (
    <li className={`pokeCard ${isActive? 'active': ''}`} onClick={() => selectPoke(props)}>
        <div className='avatar-box'>
            <img src={props.img} alt={props.nom}/>
        </div>
        <div className='nom'>
            {props.pseudo == ""?
                <p>{props.nom}</p>:
                <>
                    <p>{props.pseudo}</p>
                    <p>({props.nom})</p>
                </>
            }
            <p className='pts-badge'>⭐ {props.pointsInteraction} pts</p>
        </div>
    </li>
  )
}

export default PokeCard