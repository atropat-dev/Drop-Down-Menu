import React from "react"
import Navbar from "./Navbar"
import NavItem from "./NavItem"
import { ReactComponent as One } from "./Assest/One.svg"

function App() {
  return (
    <div className="App">
      <Navbar>
        <NavItem icon={<One />} />
        <NavItem icon={<One />} />
        <NavItem icon={<One />} />
      </Navbar>
    </div>
  )
}

export default App
