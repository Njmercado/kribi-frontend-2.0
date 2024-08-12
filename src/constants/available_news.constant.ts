import { News } from '../interfaces'
import { WATER_NEWS, YOUNG_VISION_2020, A_SCIENTIFIC_MINISTER, THE_CHAMPETA_OUR_REUNION_WITH_AFRICA } from './news'

const AVAILABLE_NEWS: News[] = [
  {
    name: 'Cuando el agua no es bendicion',
    id: 1,
    label: 'cuando-el-agua-no-es-bendicion',
    data: WATER_NEWS
  },
  {
    name: 'Jóvenes con visión 2020',
    id: 2,
    label: 'jóvenes-con-visión-2020',
    data: YOUNG_VISION_2020
  },
  {
    name: 'La Champeta: nuestro reencuentro con África',
    id: 3,
    label: 'la-champeta-nuestro-reencuentro-con-africa',
    data: THE_CHAMPETA_OUR_REUNION_WITH_AFRICA
  },
  {
    name: 'Una ministra científica',
    id: 4,
    label: 'una-ministra-cientifica',
    data: A_SCIENTIFIC_MINISTER
  },
]

export default AVAILABLE_NEWS