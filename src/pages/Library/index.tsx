import { Box, Stack, TextField } from "@mui/material";
import { Letters } from "../../components/molecules";
import { useState } from "react";
import { Letter } from "../../components/atoms";

export default function Library() {

	const [letter, setLetter] = useState<string>()

	function handleChosenLetter(value: string) {
		setLetter(value)
	}

	return (
		<Stack>
			<Stack direction='column' alignItems='center' gap={2}>
				<Box>logo</Box>
				<Box>
					<TextField
						placeholder='Busca una palabra'
					></TextField>
				</Box>
			</Stack>
			<Stack mt={5}>
				<Letters onClick={handleChosenLetter}/>
			</Stack>
			<Stack direction='row' justifyContent={'center'} mt={5}>
				{
					letter && <Letter disabled size="large" value={letter}/>
				}
			</Stack>
		</Stack>
	)
}