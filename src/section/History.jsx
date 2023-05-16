import { useState } from "react";
import Card from "UI/card/Card";

export default function History() {
  
  const [items, setitems] = useState ([1,2,3,4,5,6]) 

  const cardContent = [
    {id:1,title:'1990 - 1998',subtitle:'Et has minim elitr intellegat. Mea aeterno eleifend antiopam ad, nam no suscipit quaerendum. At nam minimum ponderum. Est audiam animal molestiae te. Ex duo eripuit mentitum.',linktext:'more'},
    {id:2,title:'2003 - 2010',subtitle:'Et has minim elitr intellegat. Mea aeterno eleifend antiopam ad, nam no suscipit quaerendum. At nam minimum ponderum. Est audiam animal molestiae te. Ex duo eripuit mentitum.',linktext:'more'},
    {id:3,title:'2010 - 2014',subtitle:'Et has minim elitr intellegat. Mea aeterno eleifend antiopam ad, nam no suscipit quaerendum. At nam minimum ponderum. Est audiam animal molestiae te. Ex duo eripuit mentitum.',linktext:'more'},
    {id:4,title:'2014 - зараз',subtitle:'Et has minim elitr intellegat. Mea aeterno eleifend antiopam ad, nam no suscipit quaerendum. At nam minimum ponderum. Est audiam animal molestiae te. Ex duo eripuit mentitum.',linktext:'more'},
  ]
  const titelCard = [
    {title:'Періоди медиації',id:1, idPage:1,imgNext:'', imgPrev:''},
    {title:'Про проект',id:2, idPage:2,imgNext:'', imgPrev:''},
    {title:'Про медиацію',id:3, idPage:3,imgNext:'', imgPrev:''},
    {title:'Цілі медиації',id:4, idPage:4,imgNext:'', imgPrev:''},
  ]
  return (
    <section className="about">
      <h1 className="about__title"></h1>
      <div className="slider">
        <div className="slider__wrapper">
          <Card cardContent={cardContent} titelCard={titelCard}/>
        </div>
        <nav className="slider__nav">
          <ul className="slider__nav-menu">
            <li className="menu__item">
              <a className="menu_item-link">1</a>
            </li>
            <li className="menu__item">
              <a className="menu_item-link">2</a>
            </li>
            <li className="menu__item">
              <a className="menu_item-link">3</a>
            </li>
            <li className="menu__item">
              <a className="menu_item-link">4</a>
            </li>
          </ul>
          <img src="/" alt="<" className="prevHandler slider__img" />
          <img src="/" alt=">" className="nextHandler slider__img" />
        </nav>
      </div>      
    </section>
  )
}
