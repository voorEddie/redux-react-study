import React, { Component } from 'react'

class FeatureB extends Component {
  componentDidMount() {
    console.info("Mount FeatureB Comp!")
  }

  render() {
    return (
      <div>Feature B</div>
    )
  }
}

export default FeatureB
