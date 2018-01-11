import React from 'react'

import About from '../about/about'
import Translator from '../translator/translator'
import ChineseSongs from '../chinese-songs/chinese_songs'
import JapaneseSongs from '../japanese-songs/japanese_songs'
import Enlarge from '../enlarge/enlarge'

const MainContent = (props) => {
  return (
    <div className='main-content'>
      <div className='main-content__container'>
        <About />
        <Translator />
        <ChineseSongs />
        <JapaneseSongs />
        <Enlarge />
      </div>
    </div>
  )
}

export default MainContent
