import React, { Component } from 'react'

export default class SliderTest extends Component {
  render() {
    const { lastDeltaX, sliding, moveX } = this.props
    return (
      <div className="slider" id="slider">
        <div className="holder">
          <div
            className="slide"
            id="slide-0"
            style={{
              transform: `translateX(${sliding ? moveX : lastDeltaX}vw)`,
            }}
          >
            <div className="placeholder color1"></div>
          </div>
          <div
            className="slide"
            id="slide-1"
            style={{
              transform: `translateX(${sliding ? moveX : lastDeltaX}vw)`,
            }}
          >
            <div className="placeholder color2"></div>
          </div>
          <div
            className="slide"
            id="slide-2"
            style={{
              transform: `translateX(${sliding ? moveX : lastDeltaX}vw)`,
            }}
          >
            <div className="placeholder color3"></div>
          </div>
        </div>
      </div>
    )
  }
}
