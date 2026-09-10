import { Card, CardContent, CardMedia, Typography, Box, Button } from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';

interface TeamMemberCardProps {
  name: string
  lastname: string
  description: {
    short: string
  }
  role: string
  imageUrl: string
  profileUrl: string
}

export default function TeamMemberCard({ name, lastname, description, role, imageUrl, profileUrl }: TeamMemberCardProps) {
  return (
    <Card 
      variant='elevation' 
      elevation={2} 
      sx={{ 
        borderRadius: 4, 
        display: 'flex', 
        flexDirection: 'column', 
        height: '100%',
        width: '100%',
        bgcolor: 'var(--cream)',
        transition: 'transform 0.2s',
        '&:hover': {
          transform: 'translateY(-4px)',
          boxShadow: 4
        }
      }}
    >
      <Box sx={{ position: 'relative' }}>
        <CardMedia
          sx={{ 
            objectFit: 'cover', 
            height: 240,
            bgcolor: 'var(--yellow)'
          }}
          image={imageUrl}
          title={`${name} ${lastname}`}
        />
        <Box sx={{
          position: 'absolute',
          bottom: 0,
          left: 0,
          width: '100%',
          height: '30%',
          background: 'linear-gradient(to top, var(--cream), transparent)'
        }} />
      </Box>
      <CardContent 
        sx={{ 
          display: 'flex', 
          flexDirection: 'column', 
          flexGrow: 1, 
          gap: 2, 
          p: 3,
          pb: 4 
        }}
      >
        <Typography 
          sx={{ 
            fontWeight: 700, 
            color: 'var(--dark-yellow)',
            textTransform: 'uppercase',
            letterSpacing: 1,
            fontSize: '12px',
            textAlign: 'center'
          }}
        >
          {role}
        </Typography>
        <Typography 
          variant='h5' 
          sx={{ 
            fontWeight: 700, 
            color: 'var(--brown)',
            fontFamily: 'Outfit, sans-serif',
            textAlign: 'center',
            lineHeight: 1.2
          }}
        >
          {`${name} ${lastname}`}
        </Typography>
        <Typography 
          sx={{ 
            color: 'var(--brown)', 
            flexGrow: 1,
            textAlign: 'center',
            fontSize: '14px',
            display: '-webkit-box',
            WebkitLineClamp: 5,
            WebkitBoxOrient: 'vertical',
            overflow: 'hidden',
            textOverflow: 'ellipsis',
            mb: 2
          }}
        >
          {description.short}
        </Typography>
        <Button
          component={RouterLink}
          to={profileUrl}
          variant="outlined"
          sx={{
            mt: 'auto',
            color: 'var(--brown)',
            borderColor: 'var(--brown)',
            borderRadius: 8,
            textTransform: 'uppercase',
            fontWeight: 700,
            letterSpacing: 1,
            '&:hover': {
              bgcolor: 'var(--brown)',
              color: 'var(--cream)',
            }
          }}
        >
          Ver Perfil
        </Button>
      </CardContent>
    </Card>
  );
}
