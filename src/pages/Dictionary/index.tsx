import './index.css'

import { Box, Stack, CircularProgress } from "@mui/material";
import { Letters } from "../../components/molecules";
import { useEffect, useState } from "react";
import { WordDTO } from "../../interfaces/word.interface";
import { ListWords } from "../../components/organisms";
import { BaseSearcher } from '../../components/atoms';
import { Button } from '../../components/atoms';
import { SEO } from '../../components/atoms';
import { useLazyGetWordsQuery, useGetLetterWordsQuery } from "../../libs/store";

export default function Dictionary() {

	const [letter, setLetter] = useState<string>('')
	const [word, setWord] = useState<string>('')
	const [page, setPage] = useState<number>(1)
	const [wordsResult, setWordsResult] = useState<WordDTO[]>([])
	const [areMoreWords, setAreMoreWords] = useState<boolean>(false)

	const [getWords, { isLoading: wordsLoading }] = useLazyGetWordsQuery()
	const { data: lettersDataResults, isLoading: lettersLoading } = useGetLetterWordsQuery({ letter, page, limit: 10 }, {
		skip: shouldSkipLetterQuery(),
	})

	function shouldSkipLetterQuery() {
		return (letter.length == 0 && word.length == 0) ||
			(letter.length > 0 && word.length > 0)
	}

	function reset() {
		setWordsResult([])
		setPage(1)
	}

	function handleSearchWords() {
		const wordHasMoreThanThreeLetters = () => word.length > 3;

		if (wordHasMoreThanThreeLetters()) {
			reset()
			getWords(word).unwrap().then((data) => {
				setWordsResult(data.words)
			})
		}
	}

	useEffect(() => {
		const letterIsNotEmpty = () => letter.length > 0;

		if (letterIsNotEmpty() && !lettersLoading && lettersDataResults) {
			setWordsResult(oldWords => [...oldWords, ...lettersDataResults])
			setAreMoreWords(lettersDataResults.length > 0);
		}
	}, [lettersDataResults, lettersLoading])

	return (
		<main style={{ position: 'relative', minHeight: '100vh', paddingTop: '5vh', paddingBottom: '5vh' }}>
			<SEO
				title="Diccionario"
				description="Encuentra palabras en el diccionario de Kribí. Palabras en palenquero, definición y traducción."
			/>
			<Stack direction='column' alignItems='center' gap={2}>
				<Box
					component="img"
					src="/images/icono-diccionario.png"
					alt="Logo Diccionario Kribí"
					sx={{
						objectFit: 'contain', width: '150px',
						backgroundColor: 'var(--dark-brown)',
						borderRadius: '10px',
						padding: '5px',
					}}
				/>
				<BaseSearcher
					placeholder='Busca una o mas palabras'
					onChange={(event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
						setWord(event.target.value)
					}}
					onSearch={handleSearchWords}
					bgColor='var(--dark-brown)'
					color='var(--white)'
				/>
			</Stack>
			<Stack mt={5}>
				<Letters onClick={(letter: string) => {
					setLetter(letter)
					setWord('')
					reset()
				}} />
			</Stack>
			<Box>

				{wordsLoading || lettersLoading && <CircularProgress />}

				<ListWords searchedWord={word} words={wordsResult} />
				{
					areMoreWords && letter.length > 0 && word.length == 0 &&
					<Stack direction='row' justifyContent='center' alignItems='center'>
						<Button onClick={() => setPage(page + 1)} value="Cargar más palabras" />
					</Stack>
				}
			</Box>
		</main>
	)
}
