import './index.css'

import { Box, Grid, IconButton, InputBase, Paper, Stack } from "@mui/material";
import SearchIcon from '@mui/icons-material/Search';
import { Letters } from "../../components/molecules";
import { useEffect, useState } from "react";
import { IWord } from "../../interfaces/word.interface";
import { searchLetter, searchWord } from "../../api";
import { ListWords } from "../../components/organisms";

export default function Dictionary() {

	const [letter, setLetter] = useState<string>('')
	const [word, setWord] = useState<string>('')
	const [page, setPage] = useState<number>()
	const [wordsResult, setWordsResult] = useState<IWord[]>([])
	const [loading, setLoading] = useState<boolean>(false)
	const [keepScrolling, setKeepScrolling] = useState<boolean>(true);

	function reset() {
		setKeepScrolling(true)
		setWordsResult([])
		setPage(0)
	}

	function handleChosenLetter(value: string) {
		setLetter(value)
	}

	async function search(searchFunction: () => Promise<IWord[]>): Promise<IWord[]> {
		setLoading(true)
		const result = await searchFunction()
		setTimeout(() => setLoading(false), 1000)
		return result
	}

	async function getSearchWordsResult(words: string): Promise<IWord[]> {
		return search(() => searchWord(words));
	}

	async function getSearchLetterResult(letterToSearch: string, pageToSearch: number): Promise<IWord[]> {
		return search(() => searchLetter(letterToSearch, pageToSearch));
	}

	async function handleWordsResult(words: Promise<IWord[]>) {
		const isEmpty = (await words).length === 0;
		if (isEmpty) setKeepScrolling(false);
		else {
			words.then(newWords => setWordsResult(oldWords => [...oldWords, ...newWords]));
		}
	}

	function handleSearchWords() {
		const wordHasMoreThanThreeLetters = () => word.length > 3;

		if (wordHasMoreThanThreeLetters()) {
			reset()
			setLetter('')
			handleWordsResult(getSearchWordsResult(word));
		}
	}

	useEffect(() => { if (word.length === 0) reset() }, [word])

	useEffect(() => {

		const letterIsNotEmpty = () => letter.length > 0;

		if (letterIsNotEmpty()) {
			reset()
			handleWordsResult(getSearchLetterResult(letter, 0))
		}
	}, [letter])

	// When user scrolls to the bottom of the page, the next page is loaded
	useEffect(() => {
		if (page !== undefined && page > 0) handleWordsResult(getSearchLetterResult(letter, page))
	}, [page])

	// infinite scroll
	window.onscroll = function () {
		if (!keepScrolling) return;

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
		<main style={{ position: 'relative', minHeight: '100vh', paddingTop: '5vh', paddingBottom: '5vh' }}>
			<Stack direction='column' alignItems='center' gap={2}>
				<img className='dictionary-icon' src="/images/icono-diccionario.png" alt="icono diccionario" width='10%' />
				<Paper className='input' style={{ borderRadius: '10px', maxWidth: '100vw', minWidth: '50vw', backgroundColor: 'var(--dark-brown)', color: 'var(--white)'}}>
					<Grid container direction='row' columns={12} spacing={2} alignItems='center'>
						<Grid item sm={11}>
							<InputBase
								placeholder='Busca una o mas palabras'
								onChange={(event: React.ChangeEvent<HTMLInputElement>) => setWord(event.target.value)}
								fullWidth={true}
								sx={{ color: 'var(--white)' }}
							/>
						</Grid>
						<Grid item sm={1}>
							<IconButton onClick={handleSearchWords} color='inherit'>
								<SearchIcon />
							</IconButton>
						</Grid>
					</Grid>
				</Paper>
			</Stack>
			<Stack mt={5}>
				<Letters onClick={handleChosenLetter} />
			</Stack>
			<Box>
				<ListWords searchedWord={word} loading={loading} words={wordsResult} />
			</Box>
		</main>
	)
}