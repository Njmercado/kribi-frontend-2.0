'use client';

import './index.css'
import { Stack, Typography, Grid } from '@mui/material'
import Wave from 'react-wavify';
import { SectionButton } from '../../components/atoms';
import { SECTIONS } from '../../constants/sections.constant';
import { ISection } from '../../interfaces';

export default function Home() {
  return (
    <main>
      <article>
        <section>
        </section>
        <section style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', textAlign: 'center' }}>
          <Stack bgcolor='var(--yellow)' paddingTop={20}>
            <Stack direction='row' justifyContent='center' gap={5}>
              <Stack direction={'column'} height={'50vh'} justifyContent={'center'}>
                <Typography variant={'h1'} fontWeight={'bold'}>Palenque</Typography>
                <Typography variant='h3'>A un click</Typography>
              </Stack>
              <img
                src="/images/1.png"
                alt="Nino palenque sonriente mirando por la ventana de su casa"
                style={{ borderRadius: '10px' }}
                width='50%'
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
            <Stack direction='row' justifyContent='center' alignItems='center' gap={5}>
              <img
                src="/images/2.png"
                alt="Nino palenque serio mirando por la puerta de su casa"
                style={{ borderRadius: '10px' }}
                width='50%'
              />
              <Typography variant='h5' fontWeight='500' sx={{ wordWrap: 'break-word', maxWidth: '40ch', textAlign: 'left' }}>
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
          <Stack direction='row' sx={{ backgroundColor: 'var(--brown)' }} alignItems='center'>
            <Typography variant='h3' fontWeight='bold' color='var(--white)'>
              ¡CONOCE, APRENDE Y DIVIÉRTETE!
            </Typography>
            <img
              src="/images/3.png"
              alt="Nino palenque serio mirando por la puerta de su casa"
              style={{ borderRadius: '10px' }}
              width='50%'
            />
          </Stack>
          <Stack bgcolor='var(--brown)' pb={10} pt={20}>
            <Grid container direction='row' flexWrap='wrap' justifyContent='space-around' columnSpacing={2}>
              {SECTIONS.map((section: ISection, index: number) => <SectionButton {...section} key={index} />)}
            </Grid>
          </Stack>
        </section>
      </article>
    </main>
  )
}
