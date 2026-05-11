import './pokeList.css'
import Poke from './Poke'


function PokeList(props) {
  const elemsCards = props.cards.map(card => {
    if(!card.estAdopte) return <Poke props={card}/>
  })

  return (
    <ul className='card-list'>
      {elemsCards}
    </ul>
  )
}

export default PokeList