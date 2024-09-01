import { Outlet } from "react-router-dom";
import { Header, Footer } from "../components/molecules"
import "./root.layout.css"
import { styled } from "@mui/material";

const Body = styled('section')`
  min-height: 100vh;
  background-color: var(--white);
`

export default function RootLayout() {
  return (
    <main>
      <article>
        <Header/>
        <Body>
          <Outlet/>
        </Body>
        <Footer/>
      </article>
    </main>
  )
}