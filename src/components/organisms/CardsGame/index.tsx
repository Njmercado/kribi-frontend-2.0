import { useEffect } from 'react'
import { Button, Stack, Box, Typography, Chip } from "@mui/material";
import { Timer, CircularLetter } from "../../atoms";
import { useState } from "react";
import { getRandomWords } from "../../../api/index.mock";

export interface CardsGameProps { }

export default function CardsGame({

}: CardsGameProps) {

  const RADIO = 100
  const [activate, setActivate] = useState<boolean>(false)
  const [letter, setLetter] = useState<string>('')
  const [words, setWords] = useState<Array<string>>([])
  const [foundWords, setFoundWords] = useState<Array<string>>([])
  const [clickedLetters, setClickedLetters] = useState<Array<number>>([])

  useEffect(() => setWords(getRandomWords(10)), [])

  useEffect(() => {
    const wordWasFoundBefore = () => foundWords.includes(letter)

    if (!wordWasFoundBefore()) {
      const foundOneWord = () => words.includes(letter)

      if (foundOneWord()) {
        setFoundWords((items: Array<string>) => [...items, letter])
        setLetter('')
        setClickedLetters([])
      }
    }
  }, [letter])

  function getArrayOfUniqueLetters() {
    const joinedWords = words.join('')
    const splittedByLetters = joinedWords.split('')
    const uniqueSet = new Set(splittedByLetters)
    const setToArray = [...uniqueSet].sort()
    return setToArray
  }

  function handleClickLetter(value: string, index: number) {
    setLetter((before: string) => before + value)
    setClickedLetters((before: Array<number>) => [...before, index])
  }

  function handleOnCloseLetter() {
    setLetter((value: string) => value.slice(0, -1))
    setClickedLetters((before: Array<number>) => before.slice(0, -1))
  }

  function showCloseButton(index: number) {
    return clickedLetters[clickedLetters.length - 1] === index
  }

  function getCoordinates(position: number, separation: number, numberOfElements: number) {
    const newRadio = RADIO + numberOfElements * 3
    const polarAngle = separation * position * Math.PI / 180
    return {
      x: newRadio * Math.cos(polarAngle) + 73,
      y: newRadio * Math.sin(polarAngle) + 73
    }
  }

  function buildCircle() {
    const uniqueLetters = getArrayOfUniqueLetters()
    const NUMBER_OF_LETTERS = uniqueLetters.length
    const angle = 360 / NUMBER_OF_LETTERS

    return uniqueLetters.map((item: string, index: number) => {

      const { x: top, y: right } = getCoordinates(index, angle, NUMBER_OF_LETTERS)

      return (
        <Box key={index} sx={{ position: 'absolute', top, right }}>
          <CircularLetter
            reset={letter === ''}
            disabled={!activate}
            value={item}
            size='small'
            showClose={showCloseButton(index)}
            onClick={() => handleClickLetter(item, index)}
            onClose={() => handleOnCloseLetter()}
          />
        </Box>
      )
    })
  }

  return (
    <Stack>
      <Timer activate={activate} onFinish={() => setActivate(false)} />
      <Stack direction='row' justifyContent='center' width='100%'>
        <Typography variant='h4'>{letter}</Typography>
      </Stack>
      <Stack direction='row' justifyContent='center' sx={{ pb: 20, pt: 15 }}>
        <Box sx={{ position: 'relative', width: '200px', height: '200px' }}>
          {buildCircle()}
          <Stack justifyContent='center' alignItems='center' height='100%' width='100%'>
            <Typography variant='h2'>{words.length - foundWords.length}</Typography>
          </Stack>
        </Box>
      </Stack>
      <Stack direction='row' gap={2} justifyContent='center'>
        {foundWords.map((foundWord: string) => <Chip label={foundWord} />)}
      </Stack>
      <Button disabled={activate} onClick={() => setActivate(true)}>comenzar</Button>
    </Stack>
  )
}