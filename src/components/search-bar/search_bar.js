import React from 'react'

const SearchBar = (props) => {
  return (
    <div className='search-bar' data-hidden='yes'>
      <div className='search-bar__container'>
        <div className='search-bar__input-container'>
          <input type='text' name=' value=' tabIndex='0' />
        </div>
        <img src={'src/assets/simple-images/mag-glass-plain.svg'} alt={'search'} tabIndex='0' />
      </div>
      <div className='search-bar__back'>
        <a className='search-bar__back-button' tabIndex='0'>Back to Translator</a>
      </div>
    </div>
  )
}

export default SearchBar
