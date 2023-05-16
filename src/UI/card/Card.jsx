export default function Card({cardContent}) {

  return (
    <>
      {cardContent.map(card => 
        <div className="card__wrapper" key={card.id}>
          <h1 className="card__title">{card.title}</h1>
          <p className="card__subtitle">{card.subtitle}</p>
        </div>
        )}
    </>
  )
}
