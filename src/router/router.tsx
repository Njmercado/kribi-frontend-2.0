import { createBrowserRouter } from "react-router-dom"
import { RootLayout } from "../layouts"
import App from "../App"

export const ROUTER = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout/>,
    children: [
      {
        path: "/",
        element: <App/>
      }
    ]
  }
])