import React from 'react'

const ChineseSongs = (props) => {
  return (
    <section className='chinese-songs' data-section-id='chinese-songs' data-hidden='yes'>
      <div className='chinese-songs__reset'>
        <a tabIndex='0' className='chinese-songs-reset-button'>Show All Songs</a>
        <a tabIndex='0' className='chinese-songs-save-button'>Save List</a>
        <a tabIndex='0' className='chinese-songs-load-button'>Load List</a>
        <input type='file' className='chinese-songs-load-selector' />
      </div>
      <div className='chinese-songs__container'>
        <ul />
      </div>
    </section>
  )
}

export default ChineseSongs
