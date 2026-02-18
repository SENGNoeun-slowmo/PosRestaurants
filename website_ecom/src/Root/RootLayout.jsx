import React from 'react'
import {Outlet} from "react-router-dom"
import Navbar from '../components/Navbar'
import HomePage from '../Pages/HomePage'
function RootLayout() {
  return (
    <div>
       <Navbar/>
      <Outlet/> 
    </div>
  )
}

export default RootLayout