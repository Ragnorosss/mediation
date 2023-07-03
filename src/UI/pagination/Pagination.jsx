import React from 'react'

export const Pagination = () => {
  return (
    <div className='pagination__wrapper'>
      <button className='pagination__btn-prev'>Назад</button>
      <ul className='pagination__list'>
        <li className='pagination__list-item'>1</li>
        <li className='pagination__list-item'>2</li>
        <li className='pagination__list-item'>3</li>
        <li className='pagination__list-item'>4</li>
      </ul>
      <button className='pagination__btn-next'>Вперед</button>
    </div>
  )
}

