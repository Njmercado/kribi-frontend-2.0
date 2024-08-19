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
		<Grid container direction='row' flexWrap={'wrap'} columns={24} justifyContent='center' spacing={1}>
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