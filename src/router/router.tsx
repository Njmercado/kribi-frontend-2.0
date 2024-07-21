import { createBrowserRouter } from "react-router-dom"
import { RootLayout } from "../layouts"
import { Home, Dictionary, Library } from "../pages"

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
        element: <Dictionary/>
      })),
      ...["/libreria", "/yurumbi"].map((path: string) => ({
        path,
        element: <Library/>
      }))
    ]
  }
])