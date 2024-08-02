import { Button, Slider, Stack } from "@mui/material";
import { useEffect, useState } from "react";

export default function CardsGame() {

  let interval: any;
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
    }
  }, [timer])

  return (
    <Stack>
      <Slider disabled defaultValue={100} value={timer} step={1}/>
      <Button disabled={timer < 100} onClick={activateTimer}>comenzar</Button>
    </Stack>
  )
}