import { useState } from "react";
import Card from "UI/card/Card";

export default function AboutMediation() {
  

  const cardContent = [
    {id:1,header:'Періоди медиації', title:'1990 - 1998',subtitle:'Et has minim elitr intellegat. Mea aeterno eleifend antiopam ad, nam no suscipit quaerendum. At nam minimum ponderum. Est audiam animal molestiae te. Ex duo eripuit mentitum.',linktext:'more'},
    {id:3,header:'Про проект', title:'2010 - 2014',subtitle:'Et has minim elitr intellegat. Mea aeterno eleifend antiopam ad, nam no suscipit quaerendum. At nam minimum ponderum. Est audiam animal molestiae te. Ex duo eripuit mentitum.',linktext:'more'},
    {id:2,header:'Про медиацію', title:'2003 - 2010',subtitle:'Et has minim elitr intellegat. Mea aeterno eleifend antiopam ad, nam no suscipit quaerendum. At nam minimum ponderum. Est audiam animal molestiae te. Ex duo eripuit mentitum.',linktext:'more'},
    {id:4,header:'Цілі медиації', title:'2014 - зараз',subtitle:'Et has minim elitr intellegat. Mea aeterno eleifend antiopam ad, nam no suscipit quaerendum. At nam minimum ponderum. Est audiam animal molestiae te. Ex duo eripuit mentitum.',linktext:'more'},
  ]
 
  return (
    <section className="about">
      <div className="slider">
        <div className="slider__wrapper">
          <Card cardContent={cardContent}/>
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
