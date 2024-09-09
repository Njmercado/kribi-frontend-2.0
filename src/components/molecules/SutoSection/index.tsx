import { Stack, Typography } from "@mui/material";
import { Speak } from "../../atoms";
import { useState } from "react";

interface SutoSectionProps {
  title: string;
  description: string;
  key?: string;
}

export default function SutoSection({ title, description, key }: SutoSectionProps) {

  const [stop, setStop] = useState(true);

  return (
    <section style={{ marginTop: '100px' }} className="container-suto" key={key}>
      <Stack direction='row'>
        <Typography variant='h4'>{title}</Typography>
        {/* TODO: fix speak error */}
        <Speak
          onClick={() => setStop(!stop)}
          value={`${title} ${description}`}
          stop={stop}
        />
      </Stack>
      <Typography variant='body1' sx={{ mt: 5 }}>{description}</Typography>
    </section>
  );
}