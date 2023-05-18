import React from 'react'
import Avatar from "../assets/avatar.svg"

export default function MainInfo() {
    return (
        <section className="main">
            <div className="wrapper">
                <div className="main__wrapper">
                    <img className="logo-avatar" src={Avatar}/>
                    <div className=''>
                        <h1 className='title-text'>Name Surname</h1>
                        <p className='city-user title-subtitle'>Одесса</p>
                    </div>
                    <div className=''>
                        <h1 className='title-text'>Квалiфiкацiя</h1>
                        <p className='title-subtitle-profesion'>Профеciйний медiатор</p>
                    </div>
                    <button className='btn-text btn-create'>Змінити особисту інформацію</button>
                </div>
                <div className='biogrfi__wrapper'>
                    <h1 className='title-text-biogrfi'>Біографiя</h1>
                    <p className='text-about-user text-desk'>
                        Мене звати Iван, я професийний медiатор.
                        Мене звати Iван, я професийний медiатор.
                        Мене звати Iван, я професийний медiатор.
                        Мене звати Iван, я професийний медiатор.
                        Мене звати Iван, я професийний медiатор.
                        Мене звати Iван, я професийний медiатор.
                        Мене звати Iван, я професийний медiатор.
                        Мене звати Iван, я професийний медiатор.
                        Мене звати Iван, я професийний медiатор.
                        Мене звати Iван, я професийний медiатор.
                        Мене звати Iван, я професийний медiатор.
                    </p>
                </div>
            </div>
            {/* Videos start */}
            <div className="block-video">
                <div className="video-wrapper">
                    <div className="video-item"></div>
                    <iframe className='video__element' src="https://www.youtube.com/embed/oXW4cnKCzsM" 
                    frameborder="1" 
                    allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" 
                    allowfullscreen></iframe>
                </div>
            </div>
            {/* Videos end */}
            <div className="block-line">
                <div className="line"></div>
            </div>

            <br/>
            <br/>
            <br/>

            {/* mine article */}
            <div className="main-article">
                <div className="article-wrapper">
                    <p className='text-article'>Мої статтi:</p>
                    <input className="search-input text-input" placeholder='Введiть назву статтi для пошуку'/>
                    <div className="card-urticle-new">
                        <div className="section-info">
                            <img className='avatar' src={Avatar} alt="" />
                            <h3 className='text-name'>Name</h3>
                            <p className='data-post'>сьогодні о 15:23</p>
                        </div>
                        <div className="title-article">
                            <p className='text-name-article'>Назва статті</p>
                            <div className="item-subject">
                                <ul className='ul-list'>
                                    <li className='list-item'>1</li>
                                    <li className='list-item'>2</li>
                                    <li className='list-item'>3</li>
                                </ul>
                            </div>
                        </div>
                        <div className="articl-block-info">
                            <p className='text-articl-info'>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                                Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                                Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                            </p>
                        </div>
                        <div className="btn-block">
                            <button className='btn-download text-btn-download'>Завантажити</button>
                            <button className='btn-create text-btn-create'>Змінити</button>
                        </div>
                    </div>

                    <br/>

                    <div className="card-urticle-editinig">
                        <div className="section-info-2">
                            <img className='avatar' src={Avatar} alt="" />
                            <h3 className='text-name'>Name</h3>
                            <p className='text-article-creat'>наразі стаття редагується</p>
                        </div>
                        <div className="title-article-aside">
                            <p>Назва статті</p>
                            <div className="item-subject">
                                <p>додати тему</p>
                            </div>
                        </div>
                        <div className="articl-block-info">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                            Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                        </div>
                        <div className="btn-block-created">
                            <div className="btn-block-start">
                                <button className='text-btn-attach btn-attach'>Прикріпити файли</button>
                                <button className='text-btn-saved btn-saved'>Зберегти</button>
                            </div>
                            <button className='text-btn-deleted btn-deleted'>Видалити статтю</button>
                        </div>
                    </div>

                    <br/>
                    <br/>
                    <br/>
                    <br/>

                    <div className="paginator">
                        <div className="">
                            <p>Назад</p>
                            <div className="">
                                <ul>
                                    <li>1</li>
                                    <li>2</li>
                                    <li>3</li>
                                    <li>4</li>
                                </ul>
                            </div>
                            <p>Вперед</p>
                        </div>
                    </div>
                </div>
            </div>
            {/* mine article */}
        </section>
    )
}