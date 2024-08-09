import { createBrowserRouter } from "react-router-dom"
import { RootLayout } from "../layouts"
import { Home, Dictionary, Library, Games, News } from "../pages"

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
      })),
      ...["/juegos", "/arrelike", "/actividades"].map((path: string) => ({
        path,
        element: <Games/>
      })),
      ...["/noticias", "/Chakero", "/noticia"].map((path: string) => ({
        path,
        element: <News/>
      })),
    ]
  }
])