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
            <div className="">
                <h1 className='title-text-article'>Мої статтi:</h1>
                <div className="search-input">
                    <input type="" placeholder='Введiть назву статтi для пошуку'/>
                </div>
                <div className="card-urticle-new">
                    <div className="">
                        <img src={Avatar} alt="" />
                        <h3>Name</h3>
                        <p>сьогодні о 15:23</p>
                    </div>
                    <div className="title-article">
                        <p>Назва статті</p>
                        <div className="item-subject">
                            <nav>
                                <ul>
                                    <li>1</li>
                                    <li>2</li>
                                    <li>3</li>
                                </ul>
                            </nav>
                        </div>
                    </div>
                    <div className="articl-block-info">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                        Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                        Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                    </div>
                    <div className="btn-block">
                        <button>Завантажити</button>
                        <button>Змінити</button>
                    </div>
                </div>

                <br/>
                <br/>
                <br/>
                <br/>

                <div className="card-urticle-editinig">
                    <div className="">
                        <img src={Avatar} alt="" />
                        <h3>Name</h3>
                        <p>наразі стаття редагується</p>
                    </div>
                    <div className="title-article">
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
                    <div className="btn-block">
                        <button>Завантажити</button>
                        <button>Змінити</button>
                        <button>Видалити статтю</button>
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
            {/* mine article */}
        </section>
    )
}