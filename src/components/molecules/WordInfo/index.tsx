import { Card, CardContent, Stack, Divider, Typography, Chip, CardActions, Button } from '@mui/material';

interface IWordInfo {
  value: string
  translations: Array<string>
  from: 'es' | 'pal'
}

export interface WordInfoProps extends IWordInfo { }

export default function WordInfo({
  value,
  translations,
  from
}: WordInfoProps) {
  return (
    <Card>
      <CardContent>
        <Stack direction='column'>
          <Chip label={from} sx={{width: '6ch'}}></Chip>
          <Typography variant='h5' mt={2}>{value}</Typography>
          <Divider />
          <Typography variant='subtitle2' mt={2}>traducciones</Typography>
          <Stack direction='row'>
            {
              <Typography variant='h6'>
                {translations.slice(0, 2).join(', ')}
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
