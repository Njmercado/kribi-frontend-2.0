import { useEffect, useState } from "react";
import Letter, { LetterProps } from "../Letter";
import { COLORS } from "../../../constants";
import { Box, Stack } from "@mui/material";
import CloseIcon from '@mui/icons-material/Close';
import './index.css'

export interface CircularLetterProps extends LetterProps {
  reset?: boolean,
  onClose?: () => void,
  showClose?: boolean
}

export default function CircularLetter({
  value,
  onClick,
  size,
  disabled,
  reset,
  onClose,
  showClose
}: CircularLetterProps) {

  const [clickCounter, setClickCounter] = useState<number>(0)

  useEffect(() => {
    if (reset) {
      setClickCounter(0)
    }
  }, [reset])

  function handleOnClick() {
    setClickCounter((value: number) => value + 1)
    onClick?.(value)
  }

  function getBgColor(): string {
    return COLORS[clickCounter % COLORS.length]
  }

  function handleOnClose() {
    setClickCounter((before: number) => before - 1)
    onClose?.()
  }

  return (
    <Box position='relative'>
      {
        showClose &&
        <Stack direction='row' position='absolute' justifyContent='flex-end' style={{ right: '-15px', top: '-15px' }}>
          <CloseIcon fontSize="small" className='close-icon' onClick={handleOnClose} />
        </Stack>
      }
      <Letter
        value={value}
        size={size}
        disabled={disabled}
        style={{ borderRadius: '100%', backgroundColor: getBgColor() }}
        onClick={handleOnClick}
      />
    </Box>
  )
}