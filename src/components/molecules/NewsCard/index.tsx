import { INews } from '../../../interfaces';
import { Card, CardMedia, CardContent, CardActions, Typography, Button, Box } from '@mui/material';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

interface NewsCardProps {
  news: INews;
  onClick: (id: number) => void;
}

export default function NewsCard({ news, onClick }: NewsCardProps) {

  return (
    <Card
      sx={{
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        borderRadius: '16px',
        boxShadow: '0 4px 20px rgba(0, 0, 0, 0.05)',
        transition: 'transform 0.3s ease, box-shadow 0.3s ease',
        cursor: 'pointer',
        '&:hover': {
          transform: 'translateY(-5px)',
          boxShadow: '0 12px 30px rgba(0, 0, 0, 0.15)',
          '& .MuiCardMedia-root': {
            transform: 'scale(1.05)'
          },
        }
      }}
      onClick={() => onClick(news.id)}
    >
      <Box sx={{ overflow: 'hidden', height: 220 }}>
        <CardMedia
          component="img"
          height="220"
          image={news.image}
          alt={news.name}
          sx={{
            transition: 'transform 0.5s ease',
            objectFit: 'cover'
          }}
        />
      </Box>
      <CardContent sx={{
        flexGrow: 1,
        display: 'flex',
        flexDirection: 'column',
        background: 'var(--cream)',
        p: 3
      }}>
        <Typography
          gutterBottom
          variant="h6"
          component="h3"
          sx={{
            fontFamily: 'Outfit, sans-serif',
            fontWeight: 700,
            color: 'var(--brown)',
            lineHeight: 1.3
          }}
        >
          {news.name}
        </Typography>
        <Typography
          variant="body2"
          color="text.secondary"
          sx={{
            fontFamily: 'Inter, sans-serif',
            mb: 2,
            display: '-webkit-box',
            WebkitLineClamp: 3,
            WebkitBoxOrient: 'vertical',
            overflow: 'hidden',
            textOverflow: 'ellipsis',
            maxWidth: '100ch'
          }}
        >
          {news.description}
        </Typography>
      </CardContent>
      <CardActions sx={{
        justifyContent: 'flex-end',
        p: 3,
        pt: 0,
      }}>
        <Button
          size="small"
          sx={{
            color: 'var(--milky)',
            fontWeight: 600,
            textTransform: 'none',
            fontSize: '0.9rem',
            transition: 'color 0.2s ease',
          }}
        >
          Leer más
          <ArrowForwardIcon
            sx={{
              ml: 1,
              fontSize: 20,
              transition: 'transform 0.2s ease'
            }}
          />
        </Button>
      </CardActions>
    </Card>
  );
}
