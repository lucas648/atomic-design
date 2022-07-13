import React from "react";
import { Route, Routes, BrowserRouter } from 'react-router-dom'

import Header from "../../organisms/header";

import Home from "../../pages/home";
import Atomic from "../../pages/atomic";
import Kanban from "../../pages/kanban";

export default function Main() {
  return(
    <BrowserRouter>
      <Header/>
      <Routes>
        <Route exact path="/" element={<Home/>} />
        <Route exact path="/kanban" element={<Kanban/>} />
        <Route exact path="/atomic" element={<Atomic/>} />
      </Routes>
    </BrowserRouter>
  )
}