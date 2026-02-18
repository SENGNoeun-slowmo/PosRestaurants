import React from 'react'
import {Outlet} from "react-router-dom"
import Navbar from '../components/layout/Navbar'
function LayoutRoot() {
  return ( 
    <>
    <div className=' sticky top-0 z-50 '>
          <Navbar/>
    </div>

    <Outlet />
    </>
  
  )
}

export default LayoutRoot