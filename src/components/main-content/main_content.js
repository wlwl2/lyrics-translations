import React from 'react'

const MainContent = (props) => {
  return (
    <div className='main-content'>
      <div className='main-content__container'>
        <section className='about' data-section-id='documentation' data-hidden='yes'>
          <div className='about__paragraph'>
            This website converts Chinese and Japanese lyrics
            and text into HTML ruby elements.
          </div>
          <div className='about__paragraph'>
            You can use these characters as chinese in the add song form:
            comma(,) dash (-) full stop (.) chinese comma (，)
            chinese full stop (。)
          </div>
          <div className='about__paragraph'>
            For song input you can use spaces as chinese characters
            so that you can enter english words.
          </div>
        </section>
        <section className='translator' data-section-id='translator' data-hidden='no'>
          <div className='translator__error-container' data-error-hidden='yes' />
          <div className='translator__form-container'>
            <div className='translator__form-error' />
            <div className='translator__title'>
              <label htmlFor='title-english'>Title (English):</label>
              <input type='text' name='title-english' value='' />
              <label htmlFor='title-pinyin'>Title (Pinyin):</label>
              <input type='text' name='title-pinyin' value='' />
              <label htmlFor='title-chinese'>Title (Chinese):</label>
              <input type='text' name='title-chinese' value='' />
            </div>
            <div className='translator__artist'>
              <label htmlFor='artist-english'> Artist (English):</label>
              <input type='text' name='artist-english' value='' />
              <label htmlFor='artist-pinyin'> Artist (Pinyin):</label>
              <input type='text' name='artist-pinyin' value='' />
              <label htmlFor='artist-chinese'> Artist (Chinese):</label>
              <input type='text' name='artist-chinese' value='' />
            </div>
            <div className='translator__actions'>
              <a className='add-song-button' tabIndex='0'>Add Song</a>
              <a className='reset-song-button' tabIndex='0'>Reset</a>
              <a className='remove-all-songs' tabIndex='0'>Remove All Songs</a>
              <a className='add-example-button' tabIndex='0'>Add Example</a>
            </div>
          </div>
          <div className='translator__song'>
            <div className='translator__input-container'>
              <label htmlFor='translator-input'>Input:</label>
              <textarea className='translator__input' name='translator-input' rows='20' />
            </div>
            <div className='translator__output-container'>
              <label htmlFor='translator-output'>Output:</label>
              <textarea className='translator__output'name='translator-output' rows='20' />
            </div>
          </div>
          <div className='translator__ruby-output' />
        </section>
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
        <section className='japanese-songs' data-section-id='japanese-songs' data-hidden='yes'>
            Japanese Songs
            To be updated.
        </section>
      </div>
    </div>
  )
}

export default MainContent
