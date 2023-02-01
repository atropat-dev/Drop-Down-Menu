import React from "react"
import Navbar from "./Navbar"
import NavItem from "./NavItem"
import { ReactComponent as One } from "./Assest/One.svg"
import { ReactComponent as Menu } from "./Assest/Menu.svg"
import DropdownMenu from "./DropdownMenu"

function App() {
  return (
    <div className="App">
      <Navbar>
        <NavItem icon={<One />} />
        <NavItem icon={<One />} />
        <NavItem icon={<One />} />
        <NavItem icon={<Menu />}>
          <DropdownMenu></DropdownMenu>
        </NavItem>
      </Navbar>
    </div>
  )
}

export default App
