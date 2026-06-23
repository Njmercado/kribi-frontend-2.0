import { Card, CardContent, CardMedia, Typography, Link } from '@mui/material';

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
    <Card variant='elevation' elevation={2} sx={{ borderRadius: 2 }}>
      <CardMedia
        sx={{ objectFit: 'cover', height: 200 }}
        image={imageUrl}
        title={`${name} ${lastname}`}
      />
      <CardContent sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 2, bgcolor: 'var(--cream)' }}>
        <Typography sx={{ fontWeight: 'bolder', color: 'var(--brown)' }}>
          {role}
        </Typography>
        <Typography variant='h6' sx={{ fontWeight: 'bold', color: 'var(--brown)' }}>
          {`${name} ${lastname}`}
        </Typography>
        <Typography sx={{ color: 'var(--brown)', flexGrow: 1 }}>
          {description.short}
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
