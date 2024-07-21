import { Box, Grid, Stack, TextField } from "@mui/material";
import { Letters, Result } from "../../components/molecules";
import { useState } from "react";
import { Letter } from "../../components/atoms";
import WORDS, { IWord } from "../../constants/words";

export default function Library() {

	const [letter, setLetter] = useState<string>()

	function handleChosenLetter(value: string) {
		setLetter(value)
	}

	function buildWords() {
		return WORDS.map((word: IWord) => (
			<Grid item xs={1}>
				<Result value={word.word} translations={word.translations} from={word.language} ></Result>
			</Grid>
		))
	}

	return (
		<Stack>
			<Stack direction='column' alignItems='center' gap={2}>
				<Box>logo</Box>
				<Box>
					<TextField
						placeholder='Busca una palabra'
					></TextField>
				</Box>
			</Stack>
			<Stack mt={5}>
				<Letters onClick={handleChosenLetter} />
			</Stack>
			<Stack direction='row' justifyContent={'center'} mt={5}>
				{
					letter && <Letter disabled size="large" value={letter} />
				}
			</Stack>
			<Stack direction='row' mt={4} p={8}>
				<Grid container direction='row' columns={6} spacing={2} justifyContent='space-around'>
					{ buildWords() }
				</Grid>
			</Stack>
		</Stack>
	)
}