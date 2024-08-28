import { Grid } from "@mui/material"
import { LETTERS } from "../../../constants"
import { Letter } from "../../atoms"
import { useState } from "react"

interface ILetters {
	onClick: (letter: string) => void
}

export interface LettersProps extends ILetters { }

export default function Letters({
	onClick
}: LettersProps) {

	const [chosenLetter, setChosenLetter] = useState<string>('')

	function handleOnClick(letter: string) {
		setChosenLetter(letter)
		onClick(letter)
	}

	return (
		<Grid container direction='row' flexWrap={'wrap'} columns={24} justifyContent='center' spacing={1}>
			{
				LETTERS.map((letter: string, index: number) => (
					<Grid item  key={index}>
						<Letter active={chosenLetter === letter} size='small' value={letter} onClick={handleOnClick}/>
					</Grid>
				))
			}
		</Grid>
	)
}