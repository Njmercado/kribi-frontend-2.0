import { Grid } from "@mui/material"
import { LETTERS } from "../../../constants"
import { Letter } from "../../atoms"

interface ILetters {
	onClick: (letter: string) => void
}

export interface LettersProps extends ILetters { }

export default function Letters({
	onClick
}: LettersProps) {

	function handleOnClick(letter: string) {
		onClick(letter)
	}

	return (
		<Grid container direction='row' xs={6} sm={10} md={14} lg={18} xl={21} justifyContent='space-around'>
			{
				LETTERS.map((letter: string, index: number) => (
					<Grid item  key={index}>
						<Letter size='small' value={letter} onClick={handleOnClick}/>
					</Grid>
				))
			}
		</Grid>
	)
}