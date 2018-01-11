import React from 'react'

const MainMenu = (props) => {
  return (
    <nav className='main-menu' data-hidden='no'>
      <ul>
        <li><a tabIndex='0' data-menu-button-id='documentation'>Guide</a></li>
        <li><a tabIndex='0' data-menu-button-id='translator'>Chinese Song Translator</a></li>
        <li><a tabIndex='0' data-menu-button-id='chinese-songs'>Saved Chinese Songs</a></li>
        <li><a tabIndex='0' data-menu-button-id='japanese-songs'>Saved Japanese Songs</a></li>
        <li><a tabIndex='0' data-menu-button-id='enlarge'>Enlarge</a></li>
      </ul>
    </nav>
  )
}

export default MainMenu
