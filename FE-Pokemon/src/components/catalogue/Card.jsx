import { Link, useLoaderData } from 'react-router-dom'
import './card.css'

function Card({props}) {
  return (
    <>
        <li className='PokeCard' key={props.id}>
            <img className='card-image' src={props.img} alt={props.nom}/>
            <p>{props.nom.charAt(0).toUpperCase() + props.nom.slice(1)}</p>
            {/*<button onClick={() => console.log("Click on", props.nom)}>Adopté</button>*/}
            <Link to={`/adoption/${props.id}`}>Adopté</Link>
        </li>
    </>
  )
}

export default Card