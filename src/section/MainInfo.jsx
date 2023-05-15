import React from 'react'
import Avatar from "../assets/avatar.svg"

export default function MainInfo() {
    return (
        <div>
            <div>
                <img src={Avatar}/>
                <p>Name Surname</p>
                <p>Квалiфiкацiя</p>
                <p>Профеciйний медiатор</p>
                <button>Змінити особисту інформацію</button>
            </div>
            <div>
                <p>Біографiя</p>
                <textarea></textarea>
            </div>
        </div>
    )
}