import { Outlet } from "react-router-dom";
import { Header, Footer, Donation } from "../components/molecules"
import "./root.layout.css"
import { styled } from "@mui/material";

const Body = styled('section')`
  min-height: 100vh;
  background-color: var(--white);
  position: relative;
`

export default function RootLayout() {
  return (
    <main>
      <article>
        <Header />
        <Body>
          <Outlet />
          <Donation/>
        </Body>
        <Footer />
      </article>
    </main>
  )
}