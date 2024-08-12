'use client';

import './index.css'
import { Slider } from '../../components/molecules'
import { Wave } from '../../components/atoms'
import { Stack, Typography, Grid } from '@mui/material'
import { Link } from 'react-router-dom'

const styles = {
  slide: {
    padding: 15,
    minHeight: 100,
    color: '#fff',
  },
  slide1: {
    background: '#FEA900',
  },
  slide2: {
    background: '#B3DC4A',
  },
  slide3: {
    background: '#6AC0FF',
  },
};

export default function Home() {

  function buildItems() {
    return [
      <div style={Object.assign({}, styles.slide, styles.slide1)}>
        slide n°1
      </div>,
      <div style={Object.assign({}, styles.slide, styles.slide2)}>
        slide n°2
      </div>,
      <div style={Object.assign({}, styles.slide, styles.slide3)}>
        slide n°3
      </div>
    ]
  }

  return (
    <main>
      <article>
        <section>
          <Slider items={buildItems()} />
        </section>
        <Wave>
          <Stack textAlign={'center'} direction={'column'} justifyContent={'center'}>
            <Typography variant={'h1'} fontWeight={'bold'}>Palenque</Typography>
            <Typography variant='h3'>A un click</Typography>
            <Stack
              direction='row'
              textAlign='center'
              justifyContent='center'
              mt={30}
            >
              <Typography
                variant={'h5'}
                sx={{
                  wordWrap: 'break-word',
                  maxWidth: '50ch'
                }}
              >
                Kribí como herramienta digital es una solución interactiva y divertida; permite llegar a diferentes lugares que cuenten con acceso a internet, evitando que los usuarios tengan que trasladarse. También reduce valores negativos ambientales que se dan para acceder a escenarios de aprendizaje tradicional.
              </Typography>
            </Stack>
            <Stack direction='column' mt={10} sx={{ backgroundColor: 'red' }}>
              <Typography variant='h3' fontWeight='bold'>
                ¡CONOCE, APRENDE Y DIVIÉRTETE!
              </Typography>
              <Grid container direction='row' columns={2} columnSpacing={2}>
                <Grid item xs={1} sx={{width: '100%'}}>
                  <Link to='/kajangari'>Diccionario</Link>
                </Grid>
                <Grid item xs={1} sx={{width: '100%'}}>
                  <Link to='/noticias'>Noticias</Link>
                </Grid>
                <Grid item xs={1} sx={{width: '100%'}}>
                  <Link to='/actividades'>Actividades</Link>
                </Grid>
                <Grid item xs={1} sx={{width: '100%'}}>
                  <Link to='/tienda'>Tienda</Link>
                </Grid>
              </Grid>
            </Stack>
          </Stack>
        </Wave>
      </article>
    </main>
  )
}
