import { useState } from 'react'
import Avatar from "assets/avatar.svg"
import Button from 'UI/button/Button.module';
export default function MainInfo() {

    /* для блока Період */
    const [isOpen, setIsOpen] = useState(false);
    const [selectedOption, setSelectedOption] = useState('');

    const options = [
        '90-ті',
        '1998-2004',
        '2004-2010',
        '2010-2014',
    ];

    const handleToggle = () => {
        setIsOpen(!isOpen);
    };

    const handleOptionSelect = (option) => {
        setSelectedOption(option);
        setIsOpen(false);
    };
    /* для блока Період */

    /* для блока тема 2*/
    const [openTemaTwo, setOpenTemaTwo] = useState(false);
    const [showTemaTwo, setShowTemaTwo] = useState('');

    const temaItemTwo = [
        'Тема 2',
        'Тема 2',
        'Тема 2',
        'Тема 2',
    ];

    const showItemTwoo = () => {
        setOpenTemaTwo(!openTemaTwo);
    };

    const handleTemaTwo = (temaTwo) => {
        setShowTemaTwo(temaTwo);
        setOpenTemaTwo(false);
    };
    /* для блока тема 2 */

    /* для блока тема 3*/
    const [openTemaThree, setOpenTemaThree] = useState(false);
    const [showTemaThree, setShowTemaThree] = useState('');

    const temaItemThree = [
        'Тема 3',
        'Тема 3',
        'Тема 3',
        'Тема 3',
    ];

    const showItemLi = () => {
        setOpenTemaThree(!openTemaThree);
    };

    const handleTemaSelect = (temaThree) => {
        setShowTemaThree(temaThree);
        setOpenTemaThree(false);
    };
    /* для блока тема 3 */

    const [activeItem, setActiveItem] = useState(null);

    const handleItemClick = (index) => {
      setActiveItem(index);
    };

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
                    <Button className='btn-text btn-create'>Змінити особисту інформацію</Button>
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
                    <iframe className='video__element' src="" 
                    frameborder="1" 
                    allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" 
                    allowfullscreen></iframe>
                </div>
            </div>
            {/* Videos end */}
            <div className="block-line">
                <div className="line"></div>
            </div>

            {/* mine article */}
            <div className="main-article">
                <div className="article-wrapper">
                    <div className="title-text-article">
                        <p className='text-article'>Мої статтi:</p>
                    </div>
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

                    <div className="card-urticle-editinig">
                        <div className="section-info-2">
                            <img className='avatar' src={Avatar} alt="" />
                            <h3 className='text-name'>Name</h3>
                            <p className='text-article-creat'>наразі стаття редагується</p>
                        </div>
                        <div className="title-article-aside">
                            <p className='text-name-article'>Назва статті</p>
                            <div className="item-subject-show">
                                <div className="dropdown">
                                    <div className="dropdown__selected" onClick={handleToggle}>
                                        {selectedOption || 'Період'}
                                    </div>
                                    {isOpen && (
                                        <ul className="dropdown__options">
                                        {options.map((option, index) => (
                                            <li
                                            key={index}
                                            className="dropdown__option"
                                            onClick={() => handleTemaSelect(option)}
                                            >
                                            {option}
                                            </li>
                                        ))}
                                        </ul>
                                    )}
                                </div>
                                <div className="dropdown">
                                    <div className="dropdown__selected" onClick={showItemTwoo}>
                                        {showTemaTwo || 'Тема 2'}
                                    </div>
                                    {openTemaTwo && (
                                        <ul className="dropdown__options">
                                        {temaItemTwo.map((temaTwo, index) => (
                                            <li
                                            key={index}
                                            className="dropdown__option"
                                            onClick={() => handleTemaTwo(temaTwo)}
                                            >
                                            {temaTwo}
                                            </li>
                                        ))}
                                        </ul>
                                    )}
                                </div>
                                <div className="dropdown">
                                    <div className="dropdown__selected" onClick={showItemLi}>
                                        {showTemaThree || 'Тема 3'}
                                    </div>
                                    {openTemaThree && (
                                        <ul className="dropdown__options">
                                        {temaItemThree.map((temaThree, index) => (
                                            <li
                                            key={index}
                                            className="dropdown__option"
                                            onClick={() => handleOptionSelect(temaThree)}
                                            >
                                            {temaThree}
                                            </li>
                                        ))}
                                        </ul>
                                    )}
                                </div>
                                <p className='text-article-creat'>додати тему</p>
                            </div>
                        </div>
                        <div className="articl-block-info">
                            <p className='text-articl-info'>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                                Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                                Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                            </p>
                        </div>
                        <div className="btn-block-created">
                            <div className="btn-block-start">
                                <Button className='text-btn-attach btn-attach'>Прикріпити файли</Button>
                                <Button className='text-btn-saved btn-saved'>Зберегти</Button>
                                <Button className='text-btn-deleted btn-deleted'>Видалити статтю</Button>
                            </div>
                        </div>
                    </div>

                    <div className="paginator">
                        <div className="container">
                            <div className="text-come-back">
                                <p className="text-back ">Назад</p>
                            </div>
                            <div className="list-container">
                            <ul className="list-item">
                                <li
                                className={`item ${activeItem === 1 ? 'active' : ''}`}
                                onClick={() => handleItemClick(1)}
                                >
                                    1
                                </li>
                                <li
                                className={`item ${activeItem === 2 ? 'active' : ''}`}
                                onClick={() => handleItemClick(2)}
                                >
                                2
                                </li>
                                <li
                                className={`item ${activeItem === 3 ? 'active' : ''}`}
                                onClick={() => handleItemClick(3)}
                                >
                                3
                                </li>
                                <li
                                className={`item ${activeItem === 4 ? 'active' : ''}`}
                                onClick={() => handleItemClick(4)}
                                >
                                4
                                </li>
                            </ul>
                            </div>
                            <div className="text-forward-go">
                                <p className='text-forward'>Вперед</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* mine article */}
        </section>
    )
}