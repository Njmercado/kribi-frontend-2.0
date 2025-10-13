import './index.css'

import { Box, Stack } from "@mui/material";
import { Letters } from "../../components/molecules";
import { useEffect, useState } from "react";
import { IWord } from "../../interfaces/word.interface";
import { searchLetter, searchWord } from "../../api";
import { ListWords } from "../../components/organisms";
import { BaseSearcher } from '../../components/atoms';
import { Button } from '../../components/atoms';

export default function Dictionary() {

	const [letter, setLetter] = useState<string>('')
	const [word, setWord] = useState<string>('')
	const [page, setPage] = useState<number>(1)
	const [wordsResult, setWordsResult] = useState<IWord[]>([])
	const [loading, setLoading] = useState<boolean>(false)
	const [areMoreWords, setAreMoreWords] = useState<boolean>(false)

	function reset() {
		setWordsResult([])
		setPage(1)
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
		words.then(newWords => {
			setWordsResult(oldWords => [...oldWords, ...newWords]);
			setAreMoreWords(newWords.length > 0);
		});
	}

	function handleSearchWords() {
		const wordHasMoreThanThreeLetters = () => word.length > 3;

		if (wordHasMoreThanThreeLetters()) {
			reset()
			setLetter('')
			handleWordsResult(getSearchWordsResult(word));
		}
	}

	useEffect(() => {
		if (word.length === 0) {
			reset()
		}
	}, [word])

	useEffect(() => {

		const letterIsNotEmpty = () => letter.length > 0;

		if (letterIsNotEmpty()) {
			reset()
			handleWordsResult(getSearchLetterResult(letter, 1))
		}
	}, [letter])

	function handleLoadMore() {
		setPage(page + 1);
		handleWordsResult(getSearchLetterResult(letter, page + 1));
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
				/>
			</Stack>
			<Stack mt={5}>
				<Letters onClick={handleChosenLetter} />
			</Stack>
			<Box>
				<ListWords searchedWord={word} words={wordsResult} />
				{
					areMoreWords && letter.length > 0 &&
					<Stack direction='row' justifyContent='center' alignItems='center'>
						<Button onClick={handleLoadMore} value={loading ? "Cargando..." : "Cargar más palabras"}/>
					</Stack>
				}
			</Box>
		</main>
	)
}
