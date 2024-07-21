import { Box, Grid, Pagination, Stack, TextField } from "@mui/material";
import { Letters, Result } from "../../components/molecules";
import { useState } from "react";
import { Letter } from "../../components/atoms";
import WORDS, { IWord } from "../../constants/words";

export default function Dictionary() {

	const [letter, setLetter] = useState<string>()
	const [page, setPage] = useState<number>(1)

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

	function handleOnChangePagination(event: React.ChangeEvent<unknown>, value: number) {
		setPage(value);
	}

	return (
		<Stack sx={{position: 'relative', minHeight: '100vh'}}>
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
			<Stack
				direction='row'
				justifyContent='center'
				sx={{position: 'absolute', bottom: 25, width: '100%'}}
			>
				<Pagination
					count={10}
					page={page}
					onChange={handleOnChangePagination}
					size='large'
				/>
			</Stack>
		</Stack>
	)
}