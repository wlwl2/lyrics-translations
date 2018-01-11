import React from 'react'

const Enlarge = (props) => {
  return (
    <section className='enlarge' data-section-id='enlarge' data-hidden='yes'>
      <section className="enlarge-input">
        <textarea rows="20" />
      </section>
      <section className="enlarge-results"></section>
    </section>
  )
}

export default Enlarge
