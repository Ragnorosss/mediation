export default function Card({cardContent,titelCard}) {

  return (
    <div className="card">
      {cardContent.map(card => 
        <div className="card__wrapper" key={card.id}>
          <h1 className="card__title">{card.title}</h1>
          <p className="card__subtitle">{card.subtitle}</p>
          <a>{card.linktext}</a>
        </div>
        )}
        {titelCard.map(cardInfo => 
          <div className="card__info" key={cardInfo.id}>
            <h1 className="card__info-title">{cardInfo.title}</h1>
            <img className="card__info-nextarrow" src={cardInfo.imgNext} alt="" />
            <p className="card__info-page">{cardInfo.idPage}</p>
            <img className="card__info-prevarrow" src={cardInfo.imgPrev} alt="" />
          </div>  
        )}
    </div>
  )
}
