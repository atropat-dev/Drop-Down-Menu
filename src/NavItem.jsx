import React from "react"

function NavItem(props) {
  return (
    <li className="nav-item">

        <a href="#" className="icon-button">
          {props.icon}
        </a>

    </li>
  )
}

export default NavItem
