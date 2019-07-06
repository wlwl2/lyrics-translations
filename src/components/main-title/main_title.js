import React from 'react'

const MainTitle = (props) => {
  return (
    <div className='main-title'>
      <div className='main-title__container'>
        <div className='main-title__logo'>
          <a tabIndex='0'>
            <img src={'src/assets/art/jp-chrysanthemum-no-bg.png'} alt={''} height='60px' />
            <span>Lyrics Translations</span>
          </a>
        </div>
        <div className='main-title__language-select'>
          <span className='main-title__language-select-title'>Language:</span>
          <select className='main-title__language-select-menu'>
            <option value='english'>English</option>
            <option value='simplified-chinese'>简体中文</option>
            <option value='japanese'>日本語</option>
          </select>
        </div>
      </div>
    </div>
  )
}

export default MainTitle
