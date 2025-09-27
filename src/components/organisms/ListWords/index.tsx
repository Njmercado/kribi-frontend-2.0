import { Grid2, Stack } from "@mui/material"
import { IWord } from "../../../interfaces"
import { WordInfo } from "../../molecules"

interface ListWordsProps {
  words: IWord[]
  loading: boolean
  searchedWord?: string
}

export default function ListWords({
  words,
  loading,
  searchedWord
}: ListWordsProps) {

  function buildWords() {
    return words.map((word: IWord) => (
      <Grid2 key={word.id} size={{ xs: 3, sm: 2, md: 1, lg: 1 }}>
        <WordInfo searchedWord={searchedWord} word={word} from='pal' />
      </Grid2>
    ))
  }

  return (
    <Stack direction='column' p={8} justifyContent={'center'} alignItems={'center'}>
      <Grid2 container direction='row' columns={3} spacing={2} justifyContent='center'>
        {buildWords()}
      </Grid2>
      {
        loading &&
        <h4>loading...</h4>
      }
    </Stack>
  )
}
