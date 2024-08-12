import { INews } from '../interfaces'
import { WATER_NEWS, YOUNG_VISION_2020, A_SCIENTIFIC_MINISTER, THE_CHAMPETA_OUR_REUNION_WITH_AFRICA } from './news'

const AVAILABLE_NEWS: INews[] = [
  {
    name: 'Cuando el agua no es bendicion',
    id: 1,
    label: 'cuando-el-agua-no-es-bendicion',
    data: WATER_NEWS,
    image: 'https://res.cloudinary.com/kribi/image/upload/v1594438931/WhatsApp_Image_2020-06-29_at_12.19.41_PM_1_xoybdr.jpg'
  },
  {
    name: 'Jóvenes con visión 2020',
    id: 2,
    label: 'jóvenes-con-visión-2020',
    data: YOUNG_VISION_2020,
    image: 'https://res.cloudinary.com/kribi/image/upload/v1589322992/Las-alzan-sus-voces-21-de-diciembre-2019_cwct7b.jpg'
  },
  {
    name: 'La Champeta: nuestro reencuentro con África',
    id: 3,
    label: 'la-champeta-nuestro-reencuentro-con-africa',
    data: THE_CHAMPETA_OUR_REUNION_WITH_AFRICA,
    image: 'https://res.cloudinary.com/kribi/image/upload/v1590073152/WhatsApp_Image_2020-05-16_at_01.40.54_iupmbp.jpg'
  },
  {
    name: 'Una ministra científica',
    id: 4,
    label: 'una-ministra-cientifica',
    data: A_SCIENTIFIC_MINISTER,
    image: 'https://res.cloudinary.com/kribi/image/upload/v1580913857/ti56k6reixavm6z7ogyc.jpg'
  },
]

export default AVAILABLE_NEWS