import React from 'react'

const About = (props) => {
  return (
    <section className='about' data-section-id='documentation' data-hidden='yes'>
      <div className='about__paragraph'>
        This website converts Chinese lyrics
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
  )
}

export default About
