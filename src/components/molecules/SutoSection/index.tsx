import { Stack, Typography } from "@mui/material";

interface SutoSectionProps {
  title: string;
  description: string;
  key?: string;
}

export default function SutoSection({ title, description, key }: SutoSectionProps) {

  return (
    <Stack mt={10} key={key}>
      <Typography variant='h4' textAlign='center'>{title}</Typography>
      <Typography variant='body1' sx={{ mt: 5, maxWidth: '100ch', textAlign: 'justify', mx: '2ch' }}>{description}</Typography>
    </Stack>
  );
}