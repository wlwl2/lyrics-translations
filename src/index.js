import React, {Component} from 'react'
import ReactDOM from 'react-dom'

import BodyContainer from './components/body-container/body_container'
import Footer from './components/footer/footer'

class App extends Component {
  constructor (props) {
    super(props)
    this.state = {
    }
  }

  render () {
    return (
      <div>
        <BodyContainer />
        <Footer />
      </div>
    )
  }
}

// take this component html and put it on the page (in the DOM)
ReactDOM.render(<App />, document.querySelector('.container'))
