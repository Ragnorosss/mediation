import { useState } from "react";
import Card from "UI/card/Card";
import arrowLeft from 'assets/arrow-left-black.png'
import arrowRight from 'assets/arrow-right-black.png'
export default function AboutMediation() {
  const [currentIndex, setCurrentIndex] = useState(0)
  
  const cardContent = [
    {id:1, title:'1990 - 1998',subtitle:'1 Et has minim elitr intellegat. Mea aeterno eleifend antiopam ad, nam no suscipit quaerendum. At nam minimum ponderum. Est audiam animal molestiae te. Ex duo eripuit mentitum.',linktext:'more'},
    {id:3, title:'2010 - 2014',subtitle:'2 Et has minim elitr intellegat. Mea aeterno eleifend antiopam ad, nam no suscipit quaerendum. At nam minimum ponderum. Est audiam animal molestiae te. Ex duo eripuit mentitum.',linktext:'more'},
    {id:2, title:'2003 - 2010',subtitle:'3 Et has minim elitr intellegat. Mea aeterno eleifend antiopam ad, nam no suscipit quaerendum. At nam minimum ponderum. Est audiam animal molestiae te. Ex duo eripuit mentitum.',linktext:'more'},
    {id:4, title:'2014 - зараз',subtitle:'4 Et has minim elitr intellegat. Mea aeterno eleifend antiopam ad, nam no suscipit quaerendum. At nam minimum ponderum. Est audiam animal molestiae te. Ex duo eripuit mentitum.',linktext:'more'},
  ]
  const goToPrev = () => {
    const isFirstSlide = currentIndex === 0
    const newIndex = isFirstSlide ? cardContent.length -1 : currentIndex -1
    setCurrentIndex(newIndex)
  }
  const goToNext = () => {
    const isLastSlide = currentIndex === cardContent.length -1
    const newIndex = isLastSlide ? 0 : currentIndex +1
    setCurrentIndex(newIndex)
  }
  return (
    <section className="about">
      <div className="slider">
        <div className="slider__wrapper">
          <div className="slider__item">
            <h1 className="slider__item-title">Періоди медиації</h1>
            <Card cardContent={cardContent}/>
          </div>
          <div className="slider__item">
            {/* <h1 className="slider__item-title">Про проект</h1> */}
            <Card cardContent={cardContent}/>
          </div>
          <div className="slider__item">
            {/* <h1 className="slider__item-title">Про медиацію</h1> */}
            <Card cardContent={cardContent}/>
          </div>
          <div className="slider__item">
            {/* <h1 className="slider__item-title">Цілі медиації</h1> */}
            <Card cardContent={cardContent}/>
          </div>
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
          <img src={arrowLeft} alt="<" className="prevHandler slider__img" onClick={goToPrev}/>
          <img src={arrowRight} alt=">" className="nextHandler slider__img" onClick={goToNext}/>
        </nav>
      </div>      
    </section>
  )
}
