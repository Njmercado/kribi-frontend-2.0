import { Outlet } from "react-router-dom";
import "./root.layout.css"

export default function RootLayout() {
  return (
    <main>
      <article>
        <Outlet/>
      </article>
    </main>
  )
}