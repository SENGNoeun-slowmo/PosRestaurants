import { createBrowserRouter, RouterProvider } from "react-router-dom"
import RootLayout from "./Root/RootLayout"
import { MacPage,IpadPage, HomePage } from "./Pages"

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      { index: true, element: <HomePage /> },
      { path: "MacPage", element: <MacPage /> },
      { path: "IpadPage", element: <IpadPage /> },
    ],
  },
])

function App() {
  return <RouterProvider router={router} />
}

export default App
