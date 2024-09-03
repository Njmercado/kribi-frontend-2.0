import { VolumeMute, VolumeUp } from "@mui/icons-material";
import { IconButton } from "@mui/material";
import { useEffect } from "react";

interface SpeakProps {
  value: string;
  stop?: boolean;
  onClick?: () => void;
}

export default function Speak({ value, stop, onClick }: SpeakProps) {
  const synth = window.speechSynthesis;
  const utter = new SpeechSynthesisUtterance(value);
  synth.speak(utter);

  useEffect(() => { return () => synth.cancel() }, []);

  useEffect(() => {
    if (stop) synth.pause();
    else synth.resume();
  }, [stop])

  return (
    <IconButton onClick={onClick}>
      {
        stop?
          <VolumeMute/>:
          <VolumeUp />
      }
    </IconButton>
  );
}