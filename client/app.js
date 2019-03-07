import React from 'react'

import {Navbar} from './components'
import Map from './components/map'

import Routes from './routes'

const App = () => {
  return (
    <div>
      <Navbar />
      <Map />
      <Routes />
    </div>
  )
}

export default App
