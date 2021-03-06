import React from 'react'

import MainTitle from '../main-title/main_title'
import MainMenu from '../main-menu/main_menu'
import SearchBar from '../search-bar/search_bar'
import MainContent from '../main-content/main_content'

const BodyContainer = (props) => {
  return (
    <div className='body-container'>
      <MainTitle />
      <MainMenu />
      <SearchBar />
      <MainContent />
    </div>
  )
}

export default BodyContainer
