import { Grid, Stack, Typography } from "@mui/material";

export default function Footer() {
  return (
    <footer>
      <Stack direction={"column"}>
        <Stack direction={"row"} gap={2} justifyContent={"center"}>
          <span>Facebook</span>
          <span>Instagram</span>
        </Stack>
        <Stack direction={"row"} justifyContent={"space-between"} alignItems={"center"} p={2}>
          <Grid direction={"row"} columns={3} width={"100%"}>
            <Grid item xs={1}>
              <Typography>Contactanos</Typography>
            </Grid>
            <Grid item xs={1}>
              <Typography>Terminos y Condiciones</Typography>
            </Grid>
            <Grid item xs={1}>
              <Typography>Politicas de Privacidad</Typography>
            </Grid>
            <Grid item xs={1}>
              <Typography>@Kribi 2020</Typography>
            </Grid>
          </Grid>
          <Stack>LOGO</Stack>
        </Stack>
      </Stack>
    </footer>
  )
}