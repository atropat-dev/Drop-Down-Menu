import React from "react"
import { ReactComponent as One } from "./Assest/One.svg"

function DropdownMenu() {
  function DropdownItem(props) {
    return (
      <a href="#" className="menu-item">
        <span className="icon-button">{props.leftIcon}</span>
        {props.children}
        <span className="icon-right">{props.rightIcon}</span>
      </a>
    )
  }

  return (
    <div className="dropdown">
      <DropdownItem leftIcon={<One />}>My Profile</DropdownItem>
      <DropdownItem leftIcon={<One />}>My Profile</DropdownItem>
      <DropdownItem leftIcon={<One />}>My Profile</DropdownItem>
      <DropdownItem leftIcon={<One />}>My Profile</DropdownItem>
    </div>
  )
}

export default DropdownMenu
