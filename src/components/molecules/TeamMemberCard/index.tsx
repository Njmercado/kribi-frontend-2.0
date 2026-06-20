import { Card, CardContent, CardMedia, Typography, Link } from '@mui/material';

interface TeamMemberCardProps {
  name: string
  smallDescription: string
  role: string
  imageUrl: string
  profileUrl: string
}

export default function TeamMemberCard({ name, smallDescription, role, imageUrl, profileUrl }: TeamMemberCardProps) {
  return (
    <Card variant='elevation' elevation={2} sx={{ borderRadius: 2 }}>
      <CardMedia
        sx={{ objectFit: 'cover', height: 200 }}
        image={imageUrl}
        title={name}
      />
      <CardContent sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 2, bgcolor: 'var(--cream)' }}>
        <Typography variant='h6' sx={{ fontWeight: 500, color: 'var(--brown)' }}>
          {name}
          <span style={{ fontWeight: 'bold' }}> ({role}) </span>
        </Typography>
        <Typography sx={{ color: 'var(--brown)', flexGrow: 1 }}>
          {smallDescription}
        </Typography>
        <Link
          href={profileUrl}
          sx={{
            color: 'var(--brown)',
            fontWeight: 500
          }}
        >
          Ver Perfil
        </Link>
      </CardContent>
    </Card>
  );
}
