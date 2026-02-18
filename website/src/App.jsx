import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import './index.css'
import LayoutRoot from './Root/LayoutRoot'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import PageHome from './pages/PageHome'
import ProductDetail from './pages/ProductDetail'
const router=createBrowserRouter([
  {
    path:"/",
    element:<LayoutRoot/>,
    children:[
      {index:true,element:<PageHome/>},
      {path:"product/:id",element:<ProductDetail/>}
    ]
  }
]
)
function App() {

  return <RouterProvider router={router}  />
}

export default App
