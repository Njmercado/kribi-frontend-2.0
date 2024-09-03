import styles from './index.module.css'

import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { AVAILABLE_NEWS } from "../../../constants"
import Markdown from "react-markdown"
import { INews } from "../../../interfaces"
import { IconButton } from '@mui/material'
import { Pause, VolumeUp } from '@mui/icons-material'

export interface NewsInformationProps {}

export default function NewsInformation() {
  
  const synth = window.speechSynthesis

  const [ news, setNews ] = useState<{data: string}>()

  const params = useParams()
  const labelParam: string = params.label as unknown as string
  const idParam: number = params.id as unknown as number
  const [ isPaused, setIsPaused ] = useState(false)

  function search(prop: 'id' | 'label', valueToSearch: string | number) {
    return AVAILABLE_NEWS.find((item: INews) => item[prop] == valueToSearch) || { data: 'Not found' }
  }
  function searchById() { return search('id', idParam)}
  function searchByLabel() { return search('label', labelParam)}

  useEffect(() => {
    let result: { data: string } = { data: 'Not found' };
    if(idParam) result = searchById()
    else if(labelParam) result = searchByLabel()
    setNews(result)

    return () => {
      synth.cancel()
      setNews(undefined)
    }
  }, [])

  function handleOnClickSpeak() {
    const utter = new SpeechSynthesisUtterance(news?.data)
    synth.speak(utter)

    if(isPaused) synth.pause()
    else synth.resume()
    setIsPaused(!isPaused)
  }

  return (
    <main className={styles.container}>
      <article>
        <section>
          <IconButton onClick={handleOnClickSpeak} sx={{ bgcolor: 'var(--yellow)' }}>
            { isPaused ? <Pause style={{ fontSize: '64px' }}/> : <VolumeUp style={{ fontSize: '64px' }}/> }
          </IconButton>
        </section>
        <section>
          <Markdown
            className={styles.reactMarkdown}
          >{news?.data}</Markdown>
        </section>
      </article>
    </main>
  )
}