import React from 'react'

const MainTitle = (props) => {
  return (
    <div className='main-title'>
      <div className='main-title__container'>
        <div className='main-title__logo'>
          <a tabIndex='0'>
            <img src={'/src/assets/art/jp-chrysanthemum.png'} alt={''} height='60px' />
            <span>Lyrics Translations</span>
          </a>
        </div>
        <div className='main-title__language-select'>
          <select className='main-title__language-select-menu'>
            <option value='english'>English</option>
            <option value='simplified-chinese'>中华人民共和国 (简体中文)</option>
            <option value='japanese'>日本 (日本語)</option>
          </select>
        </div>
      </div>
    </div>
  )
}

export default MainTitle
