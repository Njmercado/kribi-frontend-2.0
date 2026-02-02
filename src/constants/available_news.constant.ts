import { INews } from '../interfaces'
import { WATER_NEWS, YOUNG_VISION_2020, A_SCIENTIFIC_MINISTER, THE_CHAMPETA_OUR_REUNION_WITH_AFRICA } from './news'

export const AVAILABLE_NEWS: INews[] = [
  {
    name: 'Cuando el agua no es bendición',
    id: 1,
    label: 'cuando-el-agua-no-es-bendicion',
    data: WATER_NEWS,
    image: 'https://res.cloudinary.com/kribi/image/upload/v1594438931/WhatsApp_Image_2020-06-29_at_12.19.41_PM_1_xoybdr.jpg',
    description: `Salimos desde Barranquilla por la troncal Caribe, lo primero que encontramos al lado
derecho de la vía una vez cruzamos el río Magdalena, es la Ciénaga Grande de Santa
Marta, la laguna de agua salada más grande y productiva del caribe colombiano, con unas
528 mil hectáreas de extensión, es formada en tierras bajas contiguas al mar Caribe, y se
encuentra aislada de este por un cordón o banco de arena, justamente encima de ese
banco de arena se construyó la vía por la que transitamos.`
  },
  {
    name: 'Jóvenes con visión 2020',
    id: 2,
    label: 'jóvenes-con-visión-2020',
    data: YOUNG_VISION_2020,
    image: 'https://res.cloudinary.com/kribi/image/upload/v1589322992/Las-alzan-sus-voces-21-de-diciembre-2019_cwct7b.jpg',
    description: `El futuro de una sociedad está determinado en cómo configure su presente. Los
grandes creadores de nuevas formas e ideologías religiosas, políticas, económicas,
artísticas, científicas y tecnológicas en su mayoría fueron jóvenes que identificaron desde
de su cosmovisión del mundo oportunidades. En los últimos meses, jóvenes de diferentes
lugares del mundo han decidido alzar sus voces y exigir la inclusión en los espacios, en
donde la gerontocracia es evidente. Tal es el caso de Colombia, donde la constitución y las
leyes son incluyentes. Las propuestas están encaminadas a garantizar no solo la
participación de la juventud sino también a las diferentes ideológicas, brindando
representatividad de la diversidad y las diferentes expresiones sociales`,
  },
  {
    name: 'La Champeta: nuestro reencuentro con África',
    id: 3,
    label: 'la-champeta-nuestro-reencuentro-con-africa',
    data: THE_CHAMPETA_OUR_REUNION_WITH_AFRICA,
    image: 'https://res.cloudinary.com/kribi/image/upload/v1590073152/WhatsApp_Image_2020-05-16_at_01.40.54_iupmbp.jpg',
    description: `¿Será que ya ha llegado el momento en que la champeta trascienda como género musical que represente y cohesione a Colombia a un nivel tanto nacional como internacional?... Decir que sí podría considerarse un poco apresurado. Pero, es in`,
  },
  {
    name: 'Una ministra científica',
    id: 4,
    label: 'una-ministra-cientifica',
    data: A_SCIENTIFIC_MINISTER,
    image: 'https://res.cloudinary.com/kribi/image/upload/v1580913857/ti56k6reixavm6z7ogyc.jpg',
    description: `Una de las apuesta más ambiciosas por parte del gobierno nacional de Colombia es la
creación del Ministerio de Ciencia, Tecnología e Innovación, por medio de la ley 1951 de
2019.`,
  },
]
