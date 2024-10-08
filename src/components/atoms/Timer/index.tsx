import { LinearProgress } from "@mui/material";
import { useEffect, useState } from "react";

export interface TimerProps {
  activate: boolean
  onFinish: () => void
}

export default function Timer({
  activate,
  onFinish
}: TimerProps) {

  let interval: number;
  const [timer, setTimer] = useState<number>(100)

  function activateTimer() {
    interval = setInterval(() => {
      setTimer((value: number) => value - 1)
    }, 1000)
  }
  
  useEffect(() => {
    if(timer === 0) {
      clearInterval(interval);
      setTimer(100)
      onFinish()
    }
  }, [timer])

  useEffect(() => {
    if(activate) activateTimer()
  }, [activate])

  return (
    <LinearProgress value={timer} variant='determinate'/>
  )
}