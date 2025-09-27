import { VolumeUp } from '@mui/icons-material';
import { Card, CardContent, Stack, Typography, Chip, IconButton } from '@mui/material';
import { IWord } from '../../../interfaces';

interface IWordInfo {
  word: IWord,
  from: 'es' | 'pal'
}

export interface WordInfoProps extends IWordInfo {
  searchedWord?: string
}

export default function WordInfo({
  word,
  from,
  searchedWord
}: WordInfoProps) {

  const synth = window.speechSynthesis
  let paulinaVoice: SpeechSynthesisVoice | undefined

  function getPaulinaVoice() {
    if (!paulinaVoice) {
      const voices = synth.getVoices()
      paulinaVoice = voices.find(voice => voice.name === "Paulina" && voice.lang === "es-MX")
    }
    return paulinaVoice
  }

  function speak(word: string) {
    const utterThis = new SpeechSynthesisUtterance(word)
    const voice = getPaulinaVoice()

    if (voice) {
      utterThis.voice = voice
    }

    utterThis.lang = 'es-MX'
    synth.speak(utterThis)
  }

  function hightlightIfMatch(word: string) {
    return searchedWord === word ? <mark>{word}</mark> : null
  }

  return (
    <Card style={{ borderRadius: '16px', backgroundColor: 'var(--light-brown)', color: 'var(--white)', width: '100%' }}>
      <CardContent>
        <Stack direction='column'>
          <Stack direction='row' justifyContent='space-between' alignItems='center'>
            <Chip label={from} sx={{ width: '8ch', bgcolor: 'var(--yellow)', color: 'var(--brown)' }} />
            <IconButton onClick={() => speak(word.word)} sx={{ bgcolor: 'var(--yellow)', ":hover": { bgcolor: 'var(--dark-yellow)' } }}> <VolumeUp /> </IconButton>
          </Stack>
          <Typography textAlign="center" variant='h4' fontWeight={'bold'}>
            {searchedWord === word.word ? <mark>{word.word}</mark> : word.word}
          </Typography>
          <Typography variant='h6' textAlign={'center'}>
            {(hightlightIfMatch(word.definitions[0]) || word.definitions[0])}
          </Typography>
          <Stack direction='row' alignItems={'center'} justifyContent={'center'} flexWrap='wrap'>
            {word.translations.map((translation: string, index: number) => (
              <Chip key={index} label={translation} sx={{ bgcolor: 'var(--dark-brown)', color: 'var(--white)', margin: '4px' }} />
            ))}
          </Stack>
        </Stack>
      </CardContent>
    </Card>
  )
}
