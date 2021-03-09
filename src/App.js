import React from 'react'
import List from './components/list/list'

import './App.scss'

const App = () => {
  return (
    <div className="app">
      <div className='heading'>
        <h1>
          Todo List
        </h1>
      </div>
      <div className="main">
        <List/>
      </div>
    </div>
  )
}

export default App
