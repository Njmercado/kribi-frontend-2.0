import { Stack, styled } from "@mui/material";
import { Link } from "react-router-dom";

const StyledNav = styled('nav')`
  padding: 5px 10px;
`

export default function Header() {
  return (
    <StyledNav>
      <Stack direction={"column"}>
        <Stack direction={"row"} justifyContent={"space-between"}>
          <Stack>LOGO</Stack>
          <Stack direction={"row"}>
            <Stack>Siguenos - Facebook - Instagram</Stack>
            <Stack>Mi Cuenta</Stack>
          </Stack>
        </Stack>
        <Stack direction={"row"} gap={2} justifyContent={"flex-end"}>
          <Link to="/">Komensá</Link>
          <Link to="/kajangari">Kajangarí</Link>
          <Link to="/">Yurumbí</Link>
          <Link to="/">Arrelike</Link>
          <Link to="/">Chakero</Link>
          <Link to="/">Suto</Link>
        </Stack>
      </Stack>
    </StyledNav>
  )
}