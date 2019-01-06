/** @jsx jsx */
import { jsx, css } from '@emotion/core'
import { Component, Fragment } from 'react'
import Hammer from 'hammerjs'
import Info from './Info'
import './App.css'
import Container from './components/Container'
import SliderTest from './components/SliderTest'

// TODO: why do you need a jsx reference to avoid errors?
// I think this sucks
jsx

export interface Props {}

interface State {
  // TODO: JESUS CHRIST TYPESCRIPT,
  // I JUST WANNA DECLARE AN ARRAY OF FUNCTIONS, IS THAT SO HARD???
  screens: object[]
  activeView: number
}

const Home = () => (
  <Fragment>
    <Container>
      <h3>attributes</h3>
    </Container>
    <Container>
      <h3>equipment</h3>
    </Container>
  </Fragment>
)

class App extends Component<Props, State> {
  state = {
    screens: [Home, Info],
    activeView: 0,
    sliding: false,
    slideWidth: 300,
    index: 0,
    moveX: 0,
    lastDeltaX: 0,
  }

  componentDidMount() {
    const body = document.querySelector('#slider')
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
    const { activeView, screens, moveX, sliding, lastDeltaX } = this.state
    // eslint-disable-next-line
    const View = screens[activeView]
    return (
      <div className="App">
        {/* <View className={animate} />
        <span>{animate}</span> */}
        <SliderTest moveX={moveX} sliding={sliding} lastDeltaX={lastDeltaX} />
      </div>
    )
  }
}

export default App
