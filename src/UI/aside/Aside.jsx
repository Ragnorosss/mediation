import React from 'react'
import { Chekbox } from 'UI/checkbox/Chekbox'
export const Aside = () => {
  return (
    <aside className='filter__content'>
      <h1 className='filter__title'>Сортувати за</h1>
      <Chekbox/>
    </aside>
  )
}

