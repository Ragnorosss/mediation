import Button from "UI/button/Button.module"
import logoImg from 'assets/logo_white_them.svg'
import { Link } from "react-router-dom"
import { srcPath } from "routing/navigated/NavigatedSrc"

export default function Header() {
  return (
    <>
   
    <header className='header'>
      <div className="header__container">
        <div className="header__wrapper">
          <Link to="/" className="header__logo">
            <img src={logoImg} alt="" />
          </Link>
          <nav className="header__menu">
            <ul className="menu__list">
              <li className="list__item">
                <Link  className='list__item-link' to={srcPath.toHome}>Головна</Link>
              </li>
              <li className="list__item">
                <Link className='list__item-link' to={srcPath.toPersArea}>Спогади</Link>
              </li>
              <li className="list__item">
                <Link className='list__item-link' to={srcPath.toLibrary}>Бібліотека</Link>
              </li>
              <li className="list__item">
              </li>
            </ul>
          </nav>
          <div className="reg">
              <Button>Стати автором</Button>
              <Button>Увійти</Button>
            </div>
            <button className="change__them"></button>
        </div>
      </div>
    </header>
    </>
  )
}
