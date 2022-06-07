import './SingleCard.css'


export default function SingleCard({ card, handleChoice, flipped, disabled }) {

  const handleClick = () => {
    if (!disabled) {
      handleChoice(card)
    }
  }

  return (
    <div className="card">
      <div className={flipped ? "flipped" : ""}>
        <img className="front" src={card.src} alt="card front" />
        <img className="back" src="https://tekeye.uk/playing_cards/images/svg_playing_cards/backs/blue2.svg" onClick={handleClick} alt="cover" />
      </div>
    </div>
  )
}
