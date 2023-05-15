import Button from "UI/button/Button.module";
import bac_img from "assets/background_hero.png";

export default function Hero() {
  return (
    <section className='hero'>
      <div className="hero__container">
        <div className="hero__wrapper">
          <div className="hero__info">
            <h1 className="hero__info-title">We help you find the best solution </h1>
            <p className="hero__info-subtitle">Історія медиації в Україні - некоммерційний проект, що збирає інформацію про Медиацію в Україні Et has minim elitr intellegat. Вже зібрано близько 10 000 статей. Mea aeterno eleifend antiopam ad, nam no suscipit quaerendum. At nam minimum ponderum. Est audiam animal molestiae te. Ex duo eripuit mentitum.</p>
            <div className="donate">
              <Button><a href="/">Підтримати</a></Button>
              <Button><a href="/">Написати нам</a></Button>
            </div>
          </div>
          <img src={bac_img} alt="hero-img"/>
        </div>
      </div>
    </section>
  )
}
