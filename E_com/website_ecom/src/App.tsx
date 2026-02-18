import './App.css'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import AppRoutes from './routes/AppRoutes'
import PageHome from './pages/PageHome'
import ProductDetailPage from './pages/ProductDetailPage'
const router=createBrowserRouter([
  {
    path:"/",
    element:<AppRoutes/>,
    children:[
      {index:true,element:<PageHome/>},
      {path:"product/:id",element:<ProductDetailPage/>}
    ]
  }
]
)
function App() {

  return <RouterProvider router={router}  />
}

export default App
