import React, { Component } from 'react'
import Hammer from 'hammerjs'
import './App.css'
import SliderTest from './components/SliderTest'

export interface Props {}

interface State {
  sliding: boolean
  slideWidth: number
  index: number
  moveX: number
  lastDeltaX: number
}

class App extends Component<Props, State> {
  state = {
    sliding: false,
    slideWidth: 300,
    index: 0,
    moveX: 0,
    lastDeltaX: 0,
  }

  componentDidMount() {
    const body = document.querySelector('#slider') as HTMLElement
    var hammertime = new Hammer(body)

    hammertime.on('pan', ev => {
      console.log(ev.deltaX)
      this.setState(state => ({
        moveX: ev.deltaX / 4 + state.lastDeltaX,
        sliding: true,
      }))
    })

    hammertime.on('panend', ev => {
      this.setState(state => {
        const lastDeltaX =
          Math.round((ev.deltaX / 4 + state.lastDeltaX) / 100) * 100
        return {
          lastDeltaX,
          sliding: false,
        }
      })
    })
  }
  render() {
    const { moveX, sliding, lastDeltaX } = this.state
    return (
      <div className="App">
        <SliderTest moveX={moveX} sliding={sliding} lastDeltaX={lastDeltaX} />
      </div>
    )
  }
}

export default App
