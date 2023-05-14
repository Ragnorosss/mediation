import Button from "UI/button/Button.module"
export default function Header() {
  return (
    <header className='header'>
      <div className="header__container">
        <div className="header__wrapper">
          <a href="#" className="header__logo"></a>
          <nav className="header__menu">
            <ul className="menu__list">
              <li className="list__item">
                <a  className='list__item-link' href="#">Головна</a>
              </li>
              <li className="list__item">
                <a className='list__item-link' href="#">Спогади</a>
              </li>
              <li className="list__item">
                <a className='list__item-link' href="#">Бібліотека</a>
              </li>
              <li className="list__item">
                <a className='list__item-link' href="#">Контакти</a>
              </li>
            </ul>
            <div className="reg">
              <Button>Стати автором</Button>
              <Button>Увійти</Button>
            </div>
          </nav>
          <Button className='changes__theme'>3</Button>
          <Button className='changes__theme'>4</Button>
        </div>
      </div>
    </header>
  )
}
