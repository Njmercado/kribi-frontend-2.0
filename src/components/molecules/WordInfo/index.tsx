import { VolumeUp } from '@mui/icons-material';
import { Card, CardContent, Stack, Divider, Typography, Chip, CardActions, Button, IconButton } from '@mui/material';

interface IWordInfo {
  value: string
  translations: Array<string>
  from: 'es' | 'pal'
}

export interface WordInfoProps extends IWordInfo {
  searchedWord?: string
}

export default function WordInfo({
  value,
  translations,
  from,
  searchedWord
}: WordInfoProps) {

  function speak(word: string) {
    const synth = window.speechSynthesis
    const utterThis = new SpeechSynthesisUtterance(word)
    synth.speak(utterThis)
  }

  function hightlightIfMatch(word: string) {
    return searchedWord === word ? <mark>{word}</mark> : null
  }

  function getSeparator(list: Array<any>, index: number, separator: string) {
    return index < list.length - 1 ? separator : '' 
  }

  return (
    <Card style={{ borderRadius: '10px', backgroundColor: 'var(--light-brown)', color: 'var(--white)' }}>
      <CardContent>
        <Stack direction='column'>
          <Stack direction='row' justifyContent='space-between' alignItems='center'>
            <Chip label={from} sx={{ width: '8ch', bgcolor: 'var(--yellow)', color: 'var(--brown)' }} />
            <IconButton onClick={() => speak(value)} sx={{ bgcolor: 'var(--yellow)' }}> <VolumeUp /> </IconButton>
          </Stack>
          <Typography textAlign='right' variant='h5' mt={2}>
            {searchedWord === value ? <mark>{value}</mark> : value}
          </Typography>
          <Divider />
          <Typography variant='subtitle1' mt={2}>traducciones</Typography>
          <Stack direction='row'>
            {
              <Typography variant='h6'>
                {translations.map((translation: string, index: number) => {
                  return ( hightlightIfMatch(translation) || translation ) + getSeparator(translations, index, ', ')
                })}
              </Typography>
            }
          </Stack>
        </Stack>
      </CardContent>
      {
        translations.length > 2 &&
        <CardActions>
          <Stack direction='row' justifyContent='center' sx={{ width: '100%' }}>
            <Button size='small'> mostrar mas </Button>
          </Stack>
        </CardActions>
      }
    </Card>
  )
}
