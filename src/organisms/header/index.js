import React from 'react'
import { Link } from 'react-router-dom'

import  NavbarMenu from '../../molecules/navbar-menu'
import SearchKeyword from '../../molecules/search-keyword'

export default function Header(){
  return(
    <nav>
      <Link className="title-home" to="/">Novatics</Link>

      <NavbarMenu />
      <SearchKeyword />
    </nav>
  )
}