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

  componentDidMount () {
    function enlargeText () {
      var enlarge = document.querySelector('.enlarge-input textarea')
      var results = document.querySelector('.enlarge-results')
      enlarge.addEventListener('input', function (event) {
        results.innerHTML = '<pre>' + event.target.value + '</pre>'
      }, false)
    }
    enlargeText()
  }
}

// take this component html and put it on the page (in the DOM)
ReactDOM.render(<App />, document.querySelector('.container'))
