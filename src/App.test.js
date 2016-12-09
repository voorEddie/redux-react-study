import React from 'react'
import renderer from 'react-test-renderer'
import App from './App'

describe('Redux DCMM App', () => {

  let comp
  let tree

  it('renders correctly', () => {
    comp = renderer.create(
      <App />
    )
    tree = comp.toJSON()
    expect(tree).toMatchSnapshot()
  })
})
