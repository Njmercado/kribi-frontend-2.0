import { createBrowserRouter } from "react-router-dom"
import { RootLayout } from "../layouts"
import { Home, Library } from "../pages"

export const ROUTER = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout/>,
    children: [
      {
        path: "/",
        element: <Home/>
      },
      ...["/diccionario", "/kajangari"].map((path: string) => ({
        path,
        element: <Library/>
      }))
    ]
  }
])