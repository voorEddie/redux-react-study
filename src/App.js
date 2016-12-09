import React from 'react'
import './App.css'
import MenuWrapper from './wrappers/MenuWrapper'
import TabsWrapper from './wrappers/TabsWrapper'

const menuItems = [
  { id: 'menu-home', value: 'Home' },
  { id: 'menu-a', value: 'Menu-Item A' },
  { id: 'menu-b', value: 'Menu-Item B' },
  { id: 'menu-c', value: 'Menu-Item C' },
  { id: 'menu-d', value: 'Menu-Item D' }
]

const App = () => (
  <div className="App">
    <header className="App-header">
      <MenuWrapper
        menuItems={ menuItems } />
    </header>
    <main className="App-main">
      <TabsWrapper
        idValueMap={ menuItems } />
    </main>
  </div>
)

export default App;
