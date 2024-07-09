import { createBrowserRouter } from "react-router-dom"
import { RootLayout } from "../layouts"
import { Home } from "../pages"

export const ROUTER = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout/>,
    children: [
      {
        path: "/",
        element: <Home/>
      }
    ]
  }
])