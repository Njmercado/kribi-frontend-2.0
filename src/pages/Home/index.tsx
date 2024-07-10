import './index.css'
import { Slider } from '../../components/molecules'
import { Wave } from '../../components/atoms'

export default function Home() {
  return (
    <main>
      <article>
        <section>
          <Slider/>
        </section>
        <section>
          <Wave>
            <div>hola</div>
          </Wave>
        </section>
      </article>
    </main>
  )
}
