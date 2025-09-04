import './index.css'

import { Box, Stack } from "@mui/material";
import { Letters } from "../../components/molecules";
import { useEffect, useState } from "react";
import { IWord } from "../../interfaces/word.interface";
import { searchLetter, searchWord } from "../../api";
import { ListWords } from "../../components/organisms";
import { BaseSearcher } from '../../components/atoms';

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
		setLoading(false);
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
			handleWordsResult(getSearchLetterResult(letter, 1))
		}
	}, [letter])

	// When user scrolls to the bottom of the page, the next page is loaded
	useEffect(() => {
		if (page !== undefined && page > 1) handleWordsResult(getSearchLetterResult(letter, page))
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
				<BaseSearcher
					placeholder='Busca una o mas palabras'
					onChange={(event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => setWord(event.target.value)}
					onSearch={handleSearchWords}
					bgColor='var(--dark-brown)'
					color='var(--white)'
					searchLocation='right'
				/>
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