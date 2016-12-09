import React, { Component } from 'react'

class FeatureA extends Component {
  componentDidMount() {
    console.info("Mount FeatureA Comp!")
  }

  render() {
    return (
      <div>Feature A</div>
    )
  }
}

export default FeatureA
