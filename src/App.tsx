/** @jsx jsx */
import { jsx, css } from '@emotion/core'
import { Component, Fragment } from 'react'
import Hammer from 'hammerjs'
import Info from './Info'
import './App.css'
import Container from './components/Container'

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
  }

  componentDidMount() {
    const body = document.querySelector('body') as HTMLElement
    var hammertime = new Hammer(body)
    hammertime.on('swipeleft', () => {
      this.setState(state => {
        const activeView =
          state.activeView === state.screens.length - 1
            ? 0
            : state.activeView + 1
        return { activeView }
      })
    })
    hammertime.on('swiperight', () => {
      this.setState(state => {
        const activeView =
          state.activeView === 0
            ? state.screens.length - 1
            : state.activeView - 1
        return { activeView }
      })
    })
  }
  public render() {
    const { activeView, screens } = this.state
    const View = screens[activeView]
    return (
      <div
        css={css`
          color: hotpink;
        `}
        className="App"
      >
        <View />
      </div>
    )
  }
}

export default App
