import { Grid, Stack } from "@mui/material"
import { IWord } from "../../../interfaces"
import { WordInfo } from "../../molecules"

interface ListWordsProps {
  words: IWord[]
  loading: boolean
}

export default function ListWords({
  words,
  loading,
}: ListWordsProps) {
  
	function buildWords() {
		return words.map((word: IWord) => (
			<Grid item sm={1}>
				<WordInfo value={word.palabra} translations={word.definicion} from='pal'/>
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