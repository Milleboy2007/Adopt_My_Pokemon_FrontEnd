import './myPokeList.css'
import PokeCard from './PokeCard'


function MyPokeList(props) {
  const elemsCards = props.cards.map(card => {
    return <PokeCard props={card}/>
  })

  return (
    <ul className='poke-list'>
      {elemsCards}
    </ul>
  )
}

export default MyPokeList