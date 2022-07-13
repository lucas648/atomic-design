import React from "react";
import { Link } from 'react-router-dom'

export default function NavbarMenu() {
  return(
   <ul>
      <li>
        <Link className="header-items" to="/kanban">Kanban</Link>
      </li>
      <li>
        <Link className="header-items" to="/atomic">Atomic</Link>
      </li>
    </ul>
  )
}