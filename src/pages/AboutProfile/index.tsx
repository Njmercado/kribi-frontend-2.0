import { Box, Container, Typography, IconButton, Breadcrumbs, Link } from '@mui/material';
import { ArrowBack, Email, LinkedIn, Twitter, Home } from '@mui/icons-material';
import { useParams, useNavigate } from 'react-router-dom'
import { TEAM_MEMBERS } from '../../constants';

export default function AboutProfile() {
  const navigate = useNavigate();
  const { name } = useParams();
  const member = TEAM_MEMBERS.find((member) => member.profileUrl.toLowerCase().includes(name?.toLowerCase() || ''))

  if (!member) {
    return (
      <Container sx={{ py: 8, textAlign: 'center' }}>
        <Typography variant="h4" sx={{ color: 'var(--brown)', fontWeight: 700 }}>Perfil no encontrado</Typography>
        <IconButton onClick={() => navigate('/nosotros')} sx={{ mt: 4, color: 'var(--brown)' }}>
          <ArrowBack /> <Typography sx={{ ml: 1, fontWeight: 700 }}>Volver</Typography>
        </IconButton>
      </Container>
    );
  }

  const nameParts = member.name.split(' ');
  const firstName = nameParts[0];
  const lastName = nameParts.slice(1).join(' ');

  return (
    <Box sx={{ minHeight: '100vh', pb: 16, color: 'var(--brown)', pt: 8 }}>
      <Container maxWidth="lg">
        <Breadcrumbs aria-label="breadcrumb" sx={{ color: 'var(--brown)', mb: 2 }}>
          <Link
            underline="hover"
            sx={{ display: 'flex', alignItems: 'center', color: 'inherit', cursor: 'pointer' }}
            onClick={() => navigate('/')}
          >
            <Home sx={{ mr: 0.5 }} fontSize="inherit" />
            Inicio
          </Link>
          <Link
            underline="hover"
            sx={{ display: 'flex', alignItems: 'center', color: 'inherit', cursor: 'pointer' }}
            onClick={() => navigate('/suto')}
          >
            Suto
          </Link>
          <Typography sx={{ color: 'var(--yellow)', fontWeight: 'bold' }}>{member.name}</Typography>
        </Breadcrumbs>

        {/* Hero Text */}
        <Box sx={{ textAlign: 'center', mb: 8 }}>
          <Typography variant="h1" sx={{ fontWeight: 700, fontSize: { xs: '2rem', md: '10rem' } }}>
            {firstName} <Box component="span" sx={{ fontStyle: 'italic', fontWeight: 400, fontFamily: 'serif' }}>{lastName}</Box>
          </Typography>
          <Typography variant="h4" sx={{ mt: 4, mb: 4, fontWeight: 700, color: 'var(--dark-yellow)' }}>
            {member.role}
          </Typography>
          {member.smallDescription && (
            <Typography sx={{ maxWidth: '800px', mx: 'auto', fontSize: '20px', lineHeight: 2, color: 'var(--dark-brown)' }}>
              {member.smallDescription}
            </Typography>
          )}
        </Box>

        {/* Image Section */}
        <Box sx={{ width: '100%', height: { xs: '400px', md: '700px' }, mb: 16 }}>
          <img
            src={member.imageUrl}
            alt={member.name}
            style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: '16px' }}
          />
        </Box>

        {/* Details Section */}

        <Box component="article" sx={{ mb: 16 }}>
          {[
            { title: 'ESPAÑOL', content: member.description.spanish },
            { title: 'PALENQUERO', content: member.description.palenquero },
            { title: 'ENGLISH', content: member.description.english }
          ].filter(lang => lang.content).map((lang, index) => (
            <Box
              component="section"
              key={index}
              sx={{
                display: 'grid',
                gridTemplateColumns: { xs: '1fr', md: '3fr 9fr' },
                gap: 4,
                mb: 8,
                '&:last-child': { mb: 0 }
              }}
            >
              <Box>
                <Typography sx={{ textTransform: 'uppercase', fontSize: '14px', fontWeight: 700, letterSpacing: 2 }}>
                  {lang.title}
                </Typography>
              </Box>
              <Box>
                <Typography sx={{ fontSize: '22px', lineHeight: 2, whiteSpace: 'pre-wrap', color: 'var(--dark-brown)' }}>
                  {lang.content}
                </Typography>
              </Box>
            </Box>
          ))}
        </Box>

        {/* Contact & Socials */}
        <Box sx={{ borderTop: '2px solid var(--brown)', pt: 8, textAlign: 'center' }}>
          <Typography variant="h2" sx={{ fontWeight: 700, mb: 6 }}>
            Redes Sociales
          </Typography>
          <Box sx={{ display: 'flex', justifyContent: 'center', gap: 4 }}>
            <IconButton sx={{ color: 'var(--brown)', border: '2px solid var(--brown)', borderRadius: '50%', padding: 2, '&:hover': { backgroundColor: 'var(--cream)' } }}>
              <Email fontSize="large" />
            </IconButton>
            <IconButton sx={{ color: 'var(--brown)', border: '2px solid var(--brown)', borderRadius: '50%', padding: 2, '&:hover': { backgroundColor: 'var(--cream)' } }}>
              <LinkedIn fontSize="large" />
            </IconButton>
            <IconButton sx={{ color: 'var(--brown)', border: '2px solid var(--brown)', borderRadius: '50%', padding: 2, '&:hover': { backgroundColor: 'var(--cream)' } }}>
              <Twitter fontSize="large" />
            </IconButton>
          </Box>
        </Box>
      </Container>
    </Box>
  );
}
