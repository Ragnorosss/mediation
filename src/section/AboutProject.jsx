import React from 'react'

export default function AboutProject() {
  return (
    <section className='about-projects'>
        <div className="about-project__container">
            <h1 className='about-project__title'>Історія медиації</h1>
            <iframe className='about-project__video' src="https://www.youtube.com/embed/oXW4cnKCzsM" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
            <h2 className='about-project__subtitle'>Дякуємо за підтримку 😄, цей сайт працює лише завдяки вам</h2>
            <div className='about-project-btn__wrapper'>
                <a href="/" className='about-project__link' >Підтримати</a>
                <a href="/" className='about-project__link' >Список донатів</a>
            </div>
        </div>
    </section>
  )
}
