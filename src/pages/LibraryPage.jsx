import React from 'react'
import { Pagination } from 'UI/pagination/Pagination'
import { Aside } from 'UI/aside/Aside'
import { Search } from 'UI/search/Search'

export const LibraryPage = () => {
  return (
    <main className='library__main'>
      <section className='library__section'>
        <Aside/>
        <Search/>
        <Pagination/>
      </section>
    </main>
  )
}
