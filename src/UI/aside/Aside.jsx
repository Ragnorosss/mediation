import React from 'react'
import { ChekboxList } from 'UI/checkboxlist/ChekboxList'
export const Aside = () => {
  return (
    <aside className='filter__content'>
      <h1 className='filter__title'>Сортувати за</h1>
      <ChekboxList/>
    </aside>
  )
}

