import './pokeCard.css'

function PokeCard({props, selectPoke}) {

  return (
    <li className='pokeCard' onClick={() => selectPoke(props)}>
        <img src={props.img} alt={props.nom}/>
        <div className='nom'>
            {props.pseudo == ""?
                <p>{props.nom}</p>:
                <>
                    <p>{props.pseudo}</p>
                    <p>({props.nom})</p>
                </>
            }
        </div>
    </li>
  )
}

export default PokeCard