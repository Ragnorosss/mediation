import facebook from 'assets/facebook.svg'
import youtube from 'assets/youtube.svg'
export default function Footer() {
  return (
    <section className='footer'>
      <div className="footer__container">
        <nav className="footer__nav">
          <div className="contacts">
            <h1 className='contacts__title'>Контакти</h1>
            <p className='contacts__subtitle'>Зверніться до нас на пошту з будь-якими пропозиціями:</p>
            <a className='contacts__link' 
              rel="noreferrer" 
              target='_blank' 
              href=" mediationhistory@gmail.com">mediationhistory@gmail.com</a>
          </div>
          <div className="media">
            <h1 className='media__title'>Наші медіа</h1>
            <p className='media__subtitle'> Підпишіться на наш ютуб та фейсбук, щоб слідкувати за останніми оновленнями</p>
            <div className="social__wrapper">
              <a className='facebook' 
                rel="noreferrer" target='_blank' 
                href="https://www.facebook.com/mediationHistoryUA">
                <img className='media__social-link' src={facebook} alt="facebook"/>
              </a>
              <a className=' youtube' 
                rel="noreferrer" target='_blank' 
                href="https://www.youtube.com/channel/UCN0C7HiO2M_6lnl3xN_NuAQ">
                <img className='social__link' src={youtube} alt="youtube" />
              </a>
            </div>
          </div>
          <div className="links">
            <h1 className='links__title'>Корисні посилання</h1>
            <a className='links__item-link' href="orgm.odessa@gmail.com">ООГМ</a>
            <a className='links__item-link' href="orgm.odessa@gmail.com">orgm.odessa@gmail.com</a>
            <a className='links__item-link' href="/">Задонатити</a>
          </div>
        </nav>
        <p className='copyright'>©   BrandName. All rights reserved.</p>
      </div>
    </section>
  )
}
