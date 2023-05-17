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
                    <iframe className='video__element' src="https://www.youtube.com/embed/watch?v=oXW4cnKCzsM" 
                    frameborder="1" 
                    allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" 
                    allowfullscreen></iframe>
                </div>
            </div>
            {/* Videos end */}
        </section>
    )
}