import { Grid, Stack } from "@mui/material"
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
			<Grid item sm={1}>
				<WordInfo searchedWord={searchedWord} value={word.word} translations={word.translations} from='pal'/>
			</Grid>
		))
	}

  return (
    <Stack direction='column' p={8} justifyContent={'center'} alignItems={'center'}>
      <Grid container flexWrap={'wrap'} direction='row' columns={4} spacing={2} justifyContent='space-around'>
        {buildWords()}
      </Grid>
      {
        loading &&
        <h4>loading...</h4>
      }
    </Stack>
  )
}
