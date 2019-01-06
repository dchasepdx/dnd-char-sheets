// So, uhh, is there a way to not have two import lines?
import * as React from 'react'
import { Component } from 'react'

interface State {
  value: string
}

export default class LongInput extends Component<State> {
  state = {
    value: '',
  }

  handleChange = (e: React.FormEvent<HTMLInputElement>): void => {
    this.setState({
      value: e.currentTarget.value,
    })
  }

  render() {
    const { value } = this.state
    return <input onChange={this.handleChange} value={value} />
  }
}
