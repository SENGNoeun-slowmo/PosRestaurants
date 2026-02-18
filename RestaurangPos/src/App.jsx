import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Index from './Home/Index'

function App() {

  return (
    <BrowserRouter>
       <Routes path='/' element={<Index/>}>
       <Route path='/index' element={<Index/>}>
          </Route>
      </Routes>
       
       </BrowserRouter>
  )
}

export default App
