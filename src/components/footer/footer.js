import React from 'react'
import { BrowserRouter as Router, Link } from 'react-router-dom'

const Footer = (props) => {
  return (
    <footer>
      <nav className='footer-menu'>
        <Router>
          <Link to='https://github.com/wlwl2/lyrics-translations' className='footer-menu-repo'>Source Code</Link>
        </Router>
      </nav>
    </footer>
  )
}

export default Footer
