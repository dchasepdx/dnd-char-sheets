/** @jsx jsx */
import { Component, Fragment } from 'react'
import { jsx } from '@emotion/core'
import Hammer from 'hammerjs'
import Info from './Info'
import './App.css'
import Container from './components/Container';

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
class App extends Component {
  state = {
    screens: [Home, Info],
    activeView: 0,
  }

  componentDidMount() {
    const body = document.querySelector('body')
    var hammertime = new Hammer(body)
    hammertime.on('swipeleft', ev => {
      this.setState(state => {
        const activeView =
          state.activeView === state.screens.length - 1
            ? 0
            : state.activeView + 1
        return { activeView }
      })
    })
    hammertime.on('swiperight', ev => {
      this.setState(state => {
        const activeView =
          state.activeView === 0
            ? state.screens.length - 1
            : state.activeView - 1
        return { activeView }
      })
    })
  }
  render() {
    const { activeView, screens } = this.state
    const View = screens[activeView]
    return (
      <div css={{ color: 'hotpink' }} className="App">
        <View />
      </div>
    )
  }
}

export default App
