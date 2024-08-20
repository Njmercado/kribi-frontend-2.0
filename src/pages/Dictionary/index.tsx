import { Box, Grid, Stack, TextField } from "@mui/material";
import { Letters, Result } from "../../components/molecules";
import { useEffect, useState } from "react";
import { Letter } from "../../components/atoms";
import { IWord } from "../../interfaces/word.interface";
import { searchLetter, searchWord } from "../../api";

export default function Dictionary() {

	const [letter, setLetter] = useState<string>('')
	const [word, setWord] = useState<string>('')
	const [page, setPage] = useState<number>()
	const [wordsResult, setWordsResult] = useState<IWord[]>([])
	const [loading, setLoading] = useState<boolean>(false)
	const [keepSearching, setKeepSearching] = useState<boolean>(true);

	function reset() {
		setKeepSearching(true)
		setWordsResult([])
		setPage(0)
	}

	function handleChosenLetter(value: string) {
		setLetter(value)
	}

	function buildWords() {
		return wordsResult.map((word: IWord) => (
			<Grid item sm={1}>
				<Result value={word.palabra} translations={word.definicion} from='pal' ></Result>
			</Grid>
		))
	}

	async function handleSearchLetter() {
		setLoading(true)
		const result = await searchLetter(letter, page);
		const isEmpty = () => result.length === 0;

		if (isEmpty()) setKeepSearching(false);
		else setWordsResult([...wordsResult, ...result]);
		setTimeout(() => setLoading(false), 1000)
	}

	useEffect(() => {
		(async () => {
			setLetter('')
			const result = await searchWord(word);
			setWordsResult(result);
		})()
	}, [word])

	useEffect(() => { 
		reset()
		handleSearchLetter()
	}, [letter])

	useEffect(() => {
		if (page !== undefined) (async () => handleSearchLetter())()
	}, [page])

	window.onscroll = function () {
		if (!keepSearching) return;

		if (window.innerHeight + window.scrollY === document.body.scrollHeight) {
			if (loading || letter.length === 0) return;
			else setPage((page ?? 0) + 1);
		}
	}

	// @ts-expect-error Event is not used but is necessary due i cant use destructure in the onChange function
	function handleOnChangePagination(event: React.ChangeEvent<unknown>, value: number) {
		setPage(value);
	}

	return (
		<Stack sx={{ position: 'relative', minHeight: '100vh' }}>
			<Stack direction='column' alignItems='center' gap={2}>
				<Box>logo</Box>
				<Box>
					<TextField
						placeholder='Busca una palabra'
						onChange={(event: React.ChangeEvent<HTMLInputElement>) => setWord(event.target.value)}
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
			<Stack direction='column' mt={4} p={8} justifyContent={'center'} alignItems={'center'}>
				<Grid container direction='row' columns={4} spacing={2} justifyContent='space-around'>
					{buildWords()}
				</Grid>
				{
					loading &&
					<h4>loading...</h4>
				}
			</Stack>
		</Stack>
	)
}