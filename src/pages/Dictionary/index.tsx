import { Box, Grid, Pagination, Stack, TextField } from "@mui/material";
import { Letters, Result } from "../../components/molecules";
import { useEffect, useState } from "react";
import { Letter } from "../../components/atoms";
import WORDS, { IWord } from "../../constants/words";
import { searchWord } from "../../api";

export default function Dictionary() {

	const [letter, setLetter] = useState<string>()
	const [word, setWord] = useState<string>('')
	const [page, setPage] = useState<number>(1)

	useEffect(() => {
		(async () => {
			const result = await searchWord(word);
			console.log('result: ', result)
		})()
	}, [word])

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

	// @ts-expect-error Event is not used but is necessary due i cant use destructure in the onChange function
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
						onChange={(event: React.ChangeEvent<unknown>) => setWord(event.target.value)}
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