import React, { Component } from 'react'
import Info from './Info'
import './App.css'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Info />
        <div class="container">
          <h3>attributes</h3>
        </div>
        <div class="container">
          <h3>equipment</h3>
        </div>
      </div>
    )
  }
}

export default App
