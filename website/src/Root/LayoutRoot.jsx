import React from 'react'
import {Outlet} from "react-router-dom"
import Navbar from '../components/layout/Navbar'
import Footer from '../components/layout/Footer'
function LayoutRoot() {
  return ( 
    <>
    <div className=' sticky top-0 z-50 '>
          <Navbar/>
    </div>

    <Outlet />
    <Footer/>
    </>
  
  )
}

export default LayoutRoot