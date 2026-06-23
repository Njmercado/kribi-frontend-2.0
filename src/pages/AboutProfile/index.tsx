import { Box, Container, Typography, IconButton, Breadcrumbs, Link, Avatar, styled } from '@mui/material';
import { ArrowBack, Email, LinkedIn, Instagram, Home } from '@mui/icons-material';
import { Markdown } from '../../components/atoms';
import { useParams, useNavigate } from 'react-router-dom'
import { TEAM_MEMBERS, TeamMember } from '../../constants';

const StyledSocialButton = styled(IconButton)(() => ({
  width: 64,
  height: 64,
  border: '2px solid var(--brown)',
  color: 'var(--brown)',
  backgroundColor: 'var(--white)',
  '&:hover': {
    backgroundColor: 'var(--light-brown)',
    color: 'var(--cream)',
    border: '2px solid var(--cream)'
  }
}))

export default function AboutProfile() {
  const navigate = useNavigate();
  const { name } = useParams();
  const member: TeamMember | undefined = TEAM_MEMBERS.find((member) => member.profileUrl.toLowerCase().includes(name?.toLowerCase() || ''))

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
        <Breadcrumbs aria-label="breadcrumb" sx={{ color: 'var(--brown)' }}>
          <Link
            underline="hover"
            sx={{ display: 'flex', alignItems: 'center', color: 'inherit', cursor: 'pointer' }}
            onClick={() => navigate('/')}
          >
            <Home fontSize="inherit" />
            <span style={{ marginLeft: '4px' }}> Inicio </span>
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
        <Box sx={{ textAlign: 'center', mt: 2 }}>
          <Typography variant="h1" sx={{ fontWeight: 700, fontSize: { xs: '2rem', md: '4rem', lg: '8rem' } }}>
            {firstName} <Box component="span" sx={{ fontStyle: 'italic', fontWeight: 400, fontFamily: 'serif' }}>{lastName}</Box>
          </Typography>
          <Typography variant="h4" sx={{ mt: 4, fontWeight: 700, color: 'var(--dark-yellow)' }}>
            {member.role}
          </Typography>
          {member.description.short && (
            <Typography sx={{ mt: 4, maxWidth: '800px', mx: 'auto', fontSize: '16px', lineHeight: 2, color: 'var(--dark-brown)' }}>
              {member.description.short}
            </Typography>
          )}
        </Box>

        {/* Image Section */}
        <Avatar src={member.imageUrl} sx={{ width: '40vw', height: '40vw', mx: 'auto', my: 4 }} alt={`${member.name} profile image`} />

        {/* Details Section */}
        <Box sx={{ maxWidth: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
          <Markdown content={member.description.long} width="64ch" />
        </Box>

        {/* Contact & Socials */}
        {
          member.social &&
          <Box sx={{ borderTop: '2px solid var(--brown)', pt: 8, mt: 8, textAlign: 'center' }}>
            <Typography variant="h4" sx={{ fontWeight: 700 }}>
              Redes Sociales
            </Typography>
            <Box sx={{ mt: 6, display: 'flex', justifyContent: 'center', gap: 4 }}>
              {
                member.social.email &&
                <StyledSocialButton onClick={() => window.open(`mailto:${member.social?.email}`)}>
                  <Email fontSize="medium" />
                </StyledSocialButton>
              }
              {
                member.social.linkedin &&
                <StyledSocialButton onClick={() => window.open(member.social?.linkedin, '_blank')}>
                  <LinkedIn fontSize="medium" />
                </StyledSocialButton>
              }
              {
                member.social.instagram &&
                <StyledSocialButton onClick={() => window.open(member.social?.instagram, '_blank')}>
                  <Instagram fontSize="medium" />
                </StyledSocialButton>
              }
            </Box>
          </Box>
        }
      </Container>
    </Box>
  );
}
