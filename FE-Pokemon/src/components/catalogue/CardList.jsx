import './cardList.css'
import Card from './Card'


function CardList(props) {
  const elemsCards = props.cards.map(card => {
    return <Card props={card}/>
  })

  return (
    <>
      <ul className="card-list">
        {elemsCards}
      </ul>
    </>
  )
}

export default CardList