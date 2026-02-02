'use client';

import './index.css'
import {
  Box,
  Container,
  Typography,
  Button,
  Grid2,
  Card,
  CardActionArea,
} from '@mui/material'
import { useNavigate } from 'react-router-dom';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import { SEO } from '../../components/atoms';
import { SECTIONS } from '../../constants/sections.constant';
import { HeaderLink } from '../../components/atoms';
import { LINKS } from '../../constants';

export default function Home() {
  const navigate = useNavigate();

  const leftPanel = () => {

    /**
     * On small screens the logo is hidden
     */

    return (<Box
      sx={{
        gridArea: 'left-panel',
        bgcolor: 'var(--yellow)',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        position: 'relative',
        zIndex: 2,
        p: 4,
        pt: 2,
      }}
    >
      <Box
        component="img"
        src="/images/logo_v2.png"
        alt="Logo Kribí"
        sx={{
          objectFit: 'contain', width: '150px',
          display: { xs: 'none', md: 'block' },
          cursor: 'pointer',
        }}
        onClick={() => navigate('/')}
      />
      <Box
        sx={{
          display: { xs: 'flex', md: 'block' },
          flexDirection: 'column',
          justifyContent: 'space-between',
          alignItems: 'center',
          height: { xs: '100%', md: 'auto' },
          width: '100%',
          gap: 2,
        }}
      >
        <Typography variant="h5" fontWeight="bold" color="var(--brown)" sx={{ mb: 2, display: { xs: 'none', md: 'block' } }}>
          Patrimonio
        </Typography>
        <Typography variant="h3" fontWeight="bold" color="var(--brown)" sx={{ mb: 2, display: { md: 'none' } }}>
          Patrimonio
        </Typography>
        <Typography variant="body2" color="var(--brown)" sx={{ opacity: 0.8, mb: 4 }}>
          Descubre la magia de San Basilio de Palenque, un tesoro cultural de la humanidad.
        </Typography>
        <Button
          variant="text"
          color="inherit"
          endIcon={<ArrowForwardIcon />}
          onClick={() => navigate('/nosotros')}
          sx={{ p: 0, '&:hover': { bgcolor: 'transparent', textDecoration: 'underline' } }}
        >
          Leer más
        </Button>
      </Box>
    </Box>
    );
  }

  const rightPanel = () => {
    return (
      <Box
        sx={{
          gridArea: 'right-panel',
          bgcolor: 'var(--brown)',
          position: 'relative',
          display: 'flex',
          alignItems: 'center',
          overflow: 'hidden',
        }}
      >
        <Box
          component="img"
          src="/images/1.png"
          alt="Palenque Hero"
          sx={{
            position: 'absolute',
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            opacity: 0.4
          }}
        />

        <Container sx={{ height: '100%', position: 'relative', zIndex: 2, p: 4, mx: 0, display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
          <Box sx={{ display: { xs: 'none', md: 'flex' }, justifyContent: 'flex-end', gap: 2 }}>
            {
              LINKS.map((link, index) => (
                <HeaderLink key={index} link={link} />
              ))
            }
          </Box>
          <Box>
            <Typography
              variant="overline"
              sx={{ color: 'var(--yellow)', letterSpacing: 3, fontWeight: 'bold' }}
            >
              BIENVENIDOS
            </Typography>
            <Typography
              variant="h1"
              sx={{
                color: 'var(--white)',
                fontWeight: 800,
                fontSize: { xs: '3rem', md: '5.5rem' },
                lineHeight: 1.1,
                fontFamily: 'Outfit, sans-serif',
                mb: 4
              }}
            >
              Palenque:<br />
              Patrimonio Vivo
            </Typography>

            <Button
              variant="contained"
              size="large"
              onClick={() => { document.getElementById('mission-section')?.scrollIntoView({ behavior: 'smooth' }) }}
              sx={{
                bgcolor: 'var(--white)',
                color: 'var(--brown)',
                fontWeight: 'bold',
                py: 2,
                px: 4,
                borderRadius: '10px',
                fontSize: '1rem',
                '&:hover': { bgcolor: 'var(--yellow)' }
              }}
            >
              EXPLORAR AHORA
            </Button>
          </Box>
        </Container>
      </Box>
    );
  }

  return (
    <main>
      <SEO
        title="Inicio"
        description="Kribí es una herramienta digital para aprender y divertirse con la cultura Palenquera."
      />
      <Box
        sx={{
          display: 'grid',
          height: '100vh',
          gridTemplateAreas: {
            xs: `"right-panel"
                  "left-panel"`,
            md: `"left-panel right-panel"`
          },
          gridTemplateColumns: {
            xs: '1fr',
            md: '1fr 3fr'
          },
        }}
      >
        {leftPanel()}
        {rightPanel()}
      </Box>

      {/* Mission Section (White) */}
      <Box id="mission-section" sx={{ py: 12, bgcolor: 'var(--white)' }}>
        <Container maxWidth="lg">
          <Typography
            variant="h3"
            align="center"
            sx={{
              fontFamily: 'Outfit, sans-serif',
              fontWeight: 800,
              color: 'var(--brown)',
              mb: 8,
              fontSize: { xs: '2.5rem', md: '3.5rem' }
            }}
          >
            Historias de Resistencia<br />y Cultura
          </Typography>

          <Box sx={{ position: 'relative', mb: 12 }}>
            {/* Big Feature Image */}
            <Box
              component="img"
              src="/images/2.png"
              alt="Niños Palenque"
              sx={{
                width: '100%',
                height: { xs: '300px', md: '500px' },
                objectFit: 'cover',
                borderRadius: '4px'
              }}
            />

            {/* Floating Info Card overlapping image */}
            <Box
              sx={{
                position: { xs: 'relative', md: 'absolute' },
                bottom: { xs: 0, md: -40 },
                right: { xs: 0, md: 40 },
                width: { md: '400px' },
                bgcolor: 'var(--white)',
                p: 4,
                mt: { xs: -4, md: 0 },
                mx: { xs: 2, md: 0 },
                boxShadow: '0 20px 40px rgba(0,0,0,0.1)',
                borderRadius: '4px'
              }}
            >
              <Typography variant="h5" fontWeight="bold" sx={{ color: 'var(--brown)', mb: 2 }}>
                Más que una herramienta
              </Typography>
              <Typography variant="body2">
                Kribí conecta con las raíces de San Basilio de Palenque, eliminando barreras y preservando nuestra historia a través de la tecnología.
              </Typography>
              <Button
                endIcon={<ArrowForwardIcon />}
                sx={{ color: 'var(--brown)', fontWeight: 'bold', p: 0 }}
                onClick={() => navigate('/nosotros')}
              >
                Nuestra Historia
              </Button>
            </Box>
          </Box>

          {/* Stats / Numbers (Optional Reference Match) */}
          <Grid2 container spacing={4} justifyContent="center" sx={{ textAlign: 'center', py: 8, borderTop: '1px solid var(--brown)' }}>
            <Grid2 size={{ xs: 12, md: 3 }}>
              <Typography variant="h3" fontWeight="bold" color="var(--brown)">1er</Typography>
              <Typography variant="body2" color="text.secondary">Diccionario Palenquero-Español Digital</Typography>
            </Grid2>
            <Grid2 size={{ xs: 12, md: 3 }}>
              <Typography variant="h3" fontWeight="bold" color="var(--brown)">300+</Typography>
              <Typography variant="body2" color="text.secondary">Años de Historia</Typography>
            </Grid2>
            <Grid2 size={{ xs: 12, md: 3 }}>
              <Typography variant="h3" fontWeight="bold" color="var(--brown)">1ra</Typography>
              <Typography variant="body2" color="text.secondary">Lengua Criolla en América</Typography>
            </Grid2>
            <Grid2 size={{ xs: 12, md: 3 }}>
              <Typography variant="h3" fontWeight="bold" color="var(--brown)">100%</Typography>
              <Typography variant="body2" color="text.secondary">Identidad Cultural</Typography>
            </Grid2>
          </Grid2>
        </Container>
      </Box>

      <Box sx={{ py: 12, bgcolor: 'var(--brown)' }}>
        <Container>
          <Typography
            variant="h3"
            sx={{
              color: 'white',
              fontFamily: 'Outfit, sans-serif',
              fontWeight: 800,
              mb: 6,
              textAlign: 'center'
            }}
          >
            Explora Nuestro Mundo
          </Typography>

          <Grid2 container spacing={4}>
            {SECTIONS.map((section, index) => (
              <Grid2 size={{ xs: 12, sm: 6, md: 4 }} key={index}>
                <Card
                  sx={{
                    height: '100%',
                    bgcolor: 'transparent',
                    color: 'white',
                    border: '1px solid rgba(255,255,255,0.1)',
                    borderRadius: '10px',
                    transition: 'all 0.3s ease',
                    '&:hover': {
                      bgcolor: 'rgba(255,255,255,0.05)',
                      borderColor: 'var(--yellow)',
                      transform: 'translateY(-5px)'
                    }
                  }}
                >
                  <CardActionArea sx={{ height: '100%', p: 3, cursor: 'default' }}>
                    <Box
                      component="img"
                      src={section.image}
                      sx={{
                        width: '100%',
                        height: '200px',
                        objectFit: 'contain',
                        mb: 3,
                        // Add a white filter or keep styling consistent
                      }}
                    />
                    <Typography variant="h5" fontWeight="bold" gutterBottom fontFamily="Outfit, sans-serif">
                      {section.title}
                    </Typography>
                    <Typography variant="body2" sx={{ opacity: 0.7, mb: 2 }}>
                      {section.description}
                    </Typography>
                    <Box
                      onClick={() => navigate(section.link)}
                      sx={{
                        bgcolor: 'var(--yellow)',
                        color: 'var(--brown)',
                        fontWeight: 'bold',
                        mt: 2,
                        p: 2,
                        borderRadius: '5px',
                        textAlign: 'center',
                        cursor: 'pointer',
                        '&:hover': {
                          translate: '0 -5px',
                          transition: 'translate 0.3s ease-in-out',
                        }
                      }}
                    >
                      Ver Sección
                    </Box>
                  </CardActionArea>
                </Card>
              </Grid2>
            ))}
          </Grid2>
        </Container>
      </Box>
    </main>
  )
}
