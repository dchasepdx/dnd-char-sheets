import React, { Component } from 'react'

export default class LongInput extends Component {
  state = {
    value: '',
  }

  handleChange = ({ target }) => {
    this.setState({
      value: target.value,
    })
  }
  render() {
    const { value } = this.state
    return <input onChange={this.handleChange} vlaue={value} />
  }
}
