import { Pagination } from 'UI/pagination/Pagination'
import { Search } from 'UI/search/Search'
import React from 'react'

import { Aside } from 'section/librarysection/Aside'

export const LibraryPage = () => {
  return (
    <div>
      <Aside/>
      <Search/>
      <Pagination/>
    </div>
  )
}

