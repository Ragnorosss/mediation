import React from 'react'
import Avatar from "../assets/avatar.svg"

export default function MainInfo() {
    return (
        <div className='informational-user'>
            <div className='information-basic'>
                <img className="logo-img" src={Avatar}/>
                <div>
                    <h1 className='text-title'>Name Surname</h1>
                    <p className='text-name-city city-user'>Одесса</p>
                </div>
                <div>
                    <h1 className='text-title'>Квалiфiкацiя</h1>
                    <p>Профеciйний медiатор</p>
                </div>
                <button className='btn-text btn-create'>Змінити особисту інформацію</button>
            </div>
            <div className='info-biogrfi'>
                <h1 className='text-title'>Біографiя</h1>
                <p className='text about-user'>
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
    )
}