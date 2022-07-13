import React from 'react'
import { Link } from 'react-router-dom'

import  NavbarMenu from '../../molecules/navbar-menu'
import SearchKeyword from '../../molecules/search-keyword'

export default function Header(){
  return(
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <Link className="navbar-brand" to="/">Novatics</Link>

      <NavbarMenu />
      <SearchKeyword />
    </nav>
  )
}