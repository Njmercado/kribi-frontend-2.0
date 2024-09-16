import { Facebook, GitHub, Instagram } from "@mui/icons-material";
import { Grid, IconButton, Stack, Typography } from "@mui/material";
import { goToFacebook, goToGithub, goToInstagram } from "../../../utils/general.utils";

export default function Footer() {
  return (
    <footer style={{ backgroundColor: 'var(--dark-brown)', color: 'var(--white)' }}>
      <Stack direction={"column"}>
        <Stack direction={"row"} gap={2} justifyContent={"center"}>
          <IconButton onClick={goToFacebook}> <Facebook style={{ color: 'var(--white)' }} fontSize="large"/> </IconButton>
          <IconButton onClick={goToInstagram}> <Instagram style={{ color: 'var(--white)' }} fontSize="large"/> </IconButton>
        </Stack>
        <Stack direction={"row"} justifyContent={"space-between"} alignItems={"center"} p={2}>
          <Grid direction={"row"} columns={3} width={"100%"}>
            <Grid item xs={1}>
              <Typography variant="h6">Contactanos</Typography>
            </Grid>
            <Grid item xs={1}>
              <Typography variant="h6">Terminos y Condiciones</Typography>
            </Grid>
            <Grid item xs={1}>
              <Typography variant="h6">Politicas de Privacidad</Typography>
            </Grid>
            <Grid item xs={1}>
              <Typography variant="h6">@Kribi 2020</Typography>
            </Grid>
          </Grid>
          <img src="/images/logo_v2.png" alt="logo kribi" width='200px' />
        </Stack>
      </Stack>
      <Stack style={{ backgroundColor: 'var(--brown)' }}>
        <Typography p={2} onClick={goToGithub}>
          Developed by Nino Mercado
          <span>
            <IconButton><GitHub style={{ color: 'var(--white)' }}/></IconButton>
          </span>
        </Typography>
      </Stack>
    </footer>
  )
}