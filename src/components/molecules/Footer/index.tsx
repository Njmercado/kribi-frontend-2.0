import { Facebook, GitHub, Instagram } from "@mui/icons-material";
import { Box, Grid2, Stack, Typography, Container, Button, IconButton, Grid } from "@mui/material";
import { goToFacebook, goToGithub, goToInstagram } from "../../../utils/general.utils";
import { useNavigate } from "react-router-dom";

export default function Footer() {

  const navigate = useNavigate();

  return (
    <footer style={{ backgroundColor: 'var(--dark-brown)', color: 'var(--white)' }}>

      {/* Footer / CTA Section (Yellow Box Style) */}
      <Box sx={{ pb: 8, pt: 8 }}>
        <Container>
          <Grid2 container>
            <Grid2 size={{ xs: 12, md: 4 }} sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
              <img src="/images/logo_v2.png" alt="logo kribi" width='200px' style={{ maxWidth: '100%', height: 'auto' }} />

              <Stack direction={"row"} gap={2} pt={2}>
                <IconButton onClick={goToFacebook}> <Facebook style={{ color: 'var(--white)' }} fontSize="large" /> </IconButton>
                <IconButton onClick={goToInstagram}> <Instagram style={{ color: 'var(--white)' }} fontSize="large" /> </IconButton>
              </Stack>
            </Grid2>

            <Grid2 size={{ xs: 12, md: 4 }} sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
              <Typography variant="h4">Explora</Typography>
              <Stack spacing={1} mt={2}>
                {['Inicio', 'Nosotros', 'Noticias', 'Contacto'].map((text) => (
                  <Typography
                    key={text}
                    color="white"
                    sx={{ cursor: 'pointer', '&:hover': { color: 'var(--yellow)' } }}
                  >
                    {text}
                  </Typography>
                ))}
              </Stack>
            </Grid2>

            <Grid2 size={{ xs: 12, md: 4 }} sx={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-around', alignItems: 'center', gap: 16 }}>
              <Box
                sx={{
                  bgcolor: 'var(--yellow)',
                  p: 4,
                  color: 'var(--brown)',
                  boxShadow: '0 10px 30px rgba(0,0,0,0.3)'
                }}
                borderRadius={2}
              >
                <Typography variant="h4" fontWeight="800" fontFamily="Outfit, sans-serif">
                  ¿Quieres aprender más?
                </Typography>
                <Typography sx={{ mt: 2, fontWeight: 500 }}>
                  Únete a nuestra comunidad y mantente al día con las últimas noticias.
                </Typography>
                <Button
                  variant="contained"
                  fullWidth
                  onClick={() => navigate('/contacto')}
                  sx={{
                    bgcolor: 'var(--brown)',
                    color: 'white',
                    fontWeight: 'bold',
                    py: 1.5,
                    mt: 2,
                    '&:hover': { bgcolor: 'black' }
                  }}
                >
                  Contáctanos
                </Button>
              </Box>
            </Grid2>
          </Grid2>
        </Container>
      </Box>
      <Typography p={2} onClick={goToGithub} textAlign="center">
        Developed by Nino Mercado
        <span>
          <IconButton><GitHub style={{ color: 'var(--white)' }} /></IconButton>
        </span>
      </Typography>
    </footer >
  )
}