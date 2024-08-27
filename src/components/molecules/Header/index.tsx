import { Stack, styled, Typography } from "@mui/material";
import { Link } from "react-router-dom";

const StyledNav = styled('nav')`
  padding: 20px 10px;
  background-color: var(--dark-brown);
`

export default function Header() {
  return (
    <StyledNav>
      <Stack direction="row" justifyContent='space-between'>
        <img src="/images/logo.png" alt="" width='10%'/>
        <Stack alignItems='flex-end' gap={2}>
          <Stack direction={"row"} justifyContent={"space-between"}>
            <Stack direction={"row"} color='var(--white)'>
              <Stack>Siguenos - Facebook - Instagram</Stack>
              <Stack>Mi Cuenta</Stack>
            </Stack>
          </Stack>
          <Stack direction={"row"} gap={2} justifyContent={"flex-end"}>
            <Link to="/">
              <Typography color='var(--white)'>Komensá</Typography>
            </Link>
            <Link to="/kajangari">Kajangarí</Link>
            <Link to="/yurumbi">Yurumbí</Link>
            <Link to="/arrelike">Arrelike</Link>
            <Link to="/chakero">Chakero</Link>
            <Link to="/suto">Suto</Link>
          </Stack>
        </Stack>
      </Stack>
    </StyledNav>
  )
}