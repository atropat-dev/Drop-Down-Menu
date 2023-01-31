import React from "react"
import Navbar from "./Navbar"
import NavItem from "./NavItem"

function App() {
  return (
    <div className="App">
      <Navbar>
        <NavItem icon="😁"/>
        <NavItem icon="😁"/>
        <NavItem icon="😁"/>
      </Navbar>
    </div>
  )
}

export default App
