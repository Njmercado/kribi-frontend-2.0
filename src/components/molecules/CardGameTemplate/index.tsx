import { Button, Card, CardActions, CardContent, Skeleton, Typography } from "@mui/material";

interface CardGameTemplateProps {
  id: string;
  name: string;
  description: string;
  onClick: (id: string) => void;
}

export default function CardGameTemplate({
  id,
  name,
  description,
  onClick
}: CardGameTemplateProps) {
  return (
    <Card sx={{
      borderRadius: '16px',
      color: 'var(--brown)',
    }}>
      <Skeleton variant='rectangular' width='100%' height='20vh' animation='wave' />
      <CardContent sx={{ bgcolor: 'var(--yellow)' }}>
        <Typography variant='h4'>{name}</Typography>
        <Typography variant='body1'>{description}</Typography>
      </CardContent>
      <CardActions style={{ justifyContent: 'flex-end', backgroundColor: 'var(--yellow)' }}>
        <Button
          variant="contained"
          sx={{ bgcolor: 'var(--brown)', color: 'var(--yellow)', ":hover": { bgcolor: 'var(--dark-brown)' } }}
          onClick={() => onClick(id)}
        >
          <Typography>Abrir</Typography>
        </Button>
      </CardActions>
    </Card>
  )
}