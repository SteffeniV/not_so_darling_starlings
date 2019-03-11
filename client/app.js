import React from "react"
import {Tab} from "semantic-ui-react"
import {Navbar} from "./components"
import Map from "./components/map"
import Sources from "./components/sources"
import ByState from "./components/byState"

import Routes from "./routes"
const panes = [
  {
    menuItem: "Summary",
    render: () => (
      <Tab.Pane>
        <Map />
      </Tab.Pane>
    )
  },
  {
    menuItem: "Choose Your States",
    render: () => (
      <Tab.Pane>
        <ByState />
      </Tab.Pane>
    )
  },
  {
    menuItem: "Sources",
    render: () => (
      <Tab.Pane>
        <Sources />
      </Tab.Pane>
    )
  }
]
const App = () => {
  return (
    <div>
      {/* <Navbar /> */}
      <Tab panes={panes} />
      {/* <Map /> */}
      <Routes />
    </div>
  )
}

export default App
