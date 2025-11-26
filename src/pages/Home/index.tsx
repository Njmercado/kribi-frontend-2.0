'use client';

import './index.css'
import { Stack, Typography, Grid2, useTheme, useMediaQuery } from '@mui/material'
import Wave from 'react-wavify';
import { SectionButton } from '../../components/atoms';
import { SECTIONS } from '../../constants/sections.constant';
import { ISection } from '../../interfaces';

export default function Home() {
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down('md'));
  return (
    <main>
      <article>
        <section style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', textAlign: 'center' }}>
          <Stack bgcolor='var(--yellow)' paddingTop={20}>
            <Stack direction={{ xs: 'column-reverse', md: 'row' }} justifyContent='center' alignItems='center' gap={5} p={2}>
              <Stack direction={'column'} height={{ xs: 'auto', md: '50vh' }} justifyContent={'center'} textAlign={{ xs: 'center', md: 'left' }}>
                <Typography variant={'h1'} fontWeight={'bold'} fontSize={{ xs: '2.5rem', md: '3.2em' }}>Palenque</Typography>
                <Typography variant='h3' fontSize={{ xs: '1.5rem', md: '3rem' }}>A un click</Typography>
              </Stack>
              <img
                src="/images/1.png"
                alt="Nino palenque sonriente mirando por la ventana de su casa"
                style={{ borderRadius: '10px', maxWidth: '100%', height: 'auto' }}
                width={isSmallScreen ? '100%' : '50%'}
              />
            </Stack>
            <Wave
              style={{ display: 'flex', marginTop: '10vh' }}
              fill='#fff6de'
              paused={false}
              options={{
                amplitude: 40,
                speed: 0.2,
                points: 3
              }}
            />
          </Stack>
          <Stack paddingTop={10}>
            <Stack direction={{ xs: 'column', md: 'row' }} justifyContent='center' alignItems='center' gap={5} p={2}>
              <img
                src="/images/2.png"
                alt="Nino palenque serio mirando por la puerta de su casa"
                style={{ borderRadius: '10px', maxWidth: '100%', height: 'auto' }}
                width={isSmallScreen ? '100%' : '50%'}
              />
              <Typography variant='h5' fontWeight='500' sx={{ wordWrap: 'break-word', maxWidth: { xs: '100%', md: '40ch' }, textAlign: { xs: 'center', md: 'left' } }}>
                Kribí como herramienta digital es una solución interactiva y divertida;
                permite llegar a diferentes lugares que cuenten con acceso a internet,
                evitando que los usuarios tengan que trasladarse. También reduce valores
                negativos ambientales que se dan para acceder a escenarios de aprendizaje tradicional.
              </Typography>
            </Stack>
            <Wave
              style={{ display: 'flex', marginTop: '11vh' }}
              fill='rgb(83, 34, 12)'
              paused={false}
              options={{
                amplitude: 40,
                speed: 0.2,
                points: 3
              }}
            />
          </Stack>
          <Stack direction={{ xs: 'column', md: 'row' }} sx={{ backgroundColor: 'var(--brown)' }} alignItems='center' p={2} gap={2}>
            <Typography variant='h3' fontWeight='bold' color='var(--white)' fontSize={{ xs: '2rem', md: '3rem' }}>
              ¡CONOCE, APRENDE Y DIVIÉRTETE!
            </Typography>
            <img
              src="/images/3.png"
              alt="Niños palenque sonrientes mirando hacia la cámara"
              style={{ borderRadius: '10px', maxWidth: '100%', height: 'auto' }}
              width={isSmallScreen ? '100%' : '50%'}
            />
          </Stack>
          <Stack bgcolor='var(--brown)' pb={10} pt={20}>
            <Grid2 container direction='row' flexWrap='wrap' justifyContent='space-around' gap={2}>
              {SECTIONS.map((section: ISection, index: number) => <SectionButton {...section} key={index} />)}
            </Grid2>
          </Stack>
        </section>
      </article>
    </main>
  )
}
