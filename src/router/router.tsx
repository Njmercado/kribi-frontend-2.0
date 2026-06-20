import { createBrowserRouter, Outlet } from "react-router-dom"
import { RootLayout } from "../layouts"
import { Home, Dictionary, Library, Games, News, AboutUs, AboutProfile } from "../pages"
import { NewsInformation } from "../components/molecules"

export const ROUTER = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      ...["/", "/inicio", "/komensa", "/komensá", "/home"].map((path: string) => ({
        path,
        element: <Home />
      })),
      ...["/diccionario", "/kajangari"].map((path: string) => ({
        path,
        element: <Dictionary />
      })),
      ...["/libreria", "/yurumbi"].map((path: string) => ({
        path,
        element: <Library />
      })),
      ...["/juegos", "/arrelike", "/actividades"].map((path: string) => ({
        path,
        element: <Games />
      })),
      ...["/noticias", "/chakero", "/noticia"].map((path: string) => ({
        path,
        element: <Outlet />,
        children: [
          {
            path: `${path}/`,
            element: <News />
          },
          {
            path: `${path}/:label`,
            element: <NewsInformation />
          },
          {
            path: `${path}/id/:id`,
            element: <NewsInformation />
          }
        ]
      })),
      ...["/nosotros", "/suto"].map((path: string) => ({
        path,
        element: <AboutUs />
      })),
      ...["/nosotros/:name", "/suto/:name"].map((path: string) => ({
        path,
        element: <AboutProfile />
      }))
    ]
  }
])
