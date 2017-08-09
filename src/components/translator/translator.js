import React from 'react'

const Translator = (props) => {
  return (
    <section className='translator' data-section-id='translator' data-hidden='no'>
      <div className='translator__error-container' data-error-hidden='yes' />
      <div className='translator__form-container'>
        <div className='translator__form-error' />
        <div className='translator__title'>
          <label htmlFor='title-english'>Title (English):</label>
          <input type='text' name='title-english' />
          <label htmlFor='title-pinyin'>Title (Pinyin):</label>
          <input type='text' name='title-pinyin' />
          <label htmlFor='title-chinese'>Title (Chinese):</label>
          <input type='text' name='title-chinese' />
        </div>
        <div className='translator__artist'>
          <label htmlFor='artist-english'> Artist (English):</label>
          <input type='text' name='artist-english' />
          <label htmlFor='artist-pinyin'> Artist (Pinyin):</label>
          <input type='text' name='artist-pinyin' />
          <label htmlFor='artist-chinese'> Artist (Chinese):</label>
          <input type='text' name='artist-chinese' />
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
  )
}

export default Translator
