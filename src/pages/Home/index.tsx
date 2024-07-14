import './index.css'
import { Slider } from '../../components/molecules'
import { Wave } from '../../components/atoms'
import { Typography } from '@mui/material'

export default function Home() {
  return (
    <main>
      <article>
        <section>
          <Slider />
        </section>
        <Wave>
          <Typography>
            <p>Palenque</p>
            <p>A un click</p>
            <p>|</p>
          </Typography>
        </Wave>
      </article>
    </main>
  )
}
