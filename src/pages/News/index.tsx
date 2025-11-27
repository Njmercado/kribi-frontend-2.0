import { AVAILABLE_NEWS } from "../../constants";
import { useNavigate } from "react-router-dom";
import { SEO } from "../../components/atoms";
import { NewsCard } from "../../components/molecules";
import { Grid2, Typography, Box, Container, Button } from "@mui/material";

export default function News() {
  const navigate = useNavigate();

  function goTo(newsId: number) {
    navigate(`/chakero/id/${newsId}`);
  }

  // Use the first news item as the hero, and the rest for the grid
  const mainNews = AVAILABLE_NEWS[0];
  const otherNews = AVAILABLE_NEWS.slice(1);

  return (
    <main style={{ minHeight: '100vh', paddingBottom: '4rem' }}>
      <SEO
        title="Chakero - Noticias Kribí"
        description="Encuentra noticias en Kribí. Noticias sobre la diversidad de nuestro pais y cultura negra."
      />

      {/* Main News Section */}
      <Box
        sx={{
          position: 'relative',
          height: '60vh',
          width: '100%',
          overflow: 'hidden',
          marginBottom: '4rem',
          display: 'flex',
          alignItems: 'flex-end'
        }}
      >
        <Box
          component="img"
          src={mainNews.image}
          alt={mainNews.name}
          sx={{
            position: 'absolute',
            width: '100%',
            height: '100%',
            objectFit: 'cover',
          }}
        />
        <Box
          sx={{
            position: 'absolute',
            width: '100%',
            height: '100%',
            background: 'linear-gradient(to top, rgba(0,0,0,0.9), rgba(0,0,0,0.4), rgba(0,0,0,0.2))',
            zIndex: 1
          }}
        />

        <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 2, pb: 6 }}>
          <Typography
            variant="overline"
            sx={{ color: 'var(--yellow)', fontWeight: 'bold', letterSpacing: 2, fontSize: '1rem' }}
          >
            DESTACADO
          </Typography>
          <Typography
            variant="h2"
            component="h1"
            sx={{
              color: 'white',
              fontWeight: 800,
              mb: 2,
              maxWidth: '800px',
              fontFamily: 'Outfit, sans-serif',
              fontSize: 'calc(3vw + 3vh)',
            }}
          >
            {mainNews.name}
          </Typography>
          <Button
            variant="contained"
            onClick={() => goTo(mainNews.id)}
            sx={{
              backgroundColor: 'var(--yellow)',
              color: 'var(--brown)',
              padding: '12px 24px',
              fontSize: '1rem',
              fontWeight: 'bold',
              borderRadius: '30px',
              textTransform: 'none',
              '&:hover': {
                transform: 'scale(1.05)'
              },
              transition: 'transform 0.2s ease'
            }}
          >
            Leer artículo completo
          </Button>
        </Container>
      </Box>

      {/* News Grid */}
      <Container maxWidth="lg">
        <Typography
          variant="h4"
          component="h2"
          sx={{
            mb: 4,
            fontWeight: 700,
            color: 'var(--brown)',
            borderLeft: '5px solid var(--yellow)',
            paddingLeft: '1rem',
            fontFamily: 'Outfit, sans-serif'
          }}
        >
          Últimas Noticias
        </Typography>

        <Grid2 container spacing={4}>
          {otherNews.map((news) => (
            <Grid2 size={{ xs: 12, sm: 6, md: 4 }} key={news.id}>
              <NewsCard news={news} onClick={goTo} />
            </Grid2>
          ))}
        </Grid2>
      </Container>
    </main>
  );
}