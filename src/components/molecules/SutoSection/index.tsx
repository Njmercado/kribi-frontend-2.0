import { Stack, Typography } from "@mui/material";

interface SutoSectionProps {
  title: string;
  description: string;
  key?: string;
}

export default function SutoSection({ title, description, key }: SutoSectionProps) {

  return (
    <section style={{ marginTop: '100px' }} className="container-suto" key={key}>
      <Stack direction='row'>
        <Typography variant='h4'>{title}</Typography>
      </Stack>
      <Typography variant='body1' sx={{ mt: 5 }}>{description}</Typography>
    </section>
  );
}