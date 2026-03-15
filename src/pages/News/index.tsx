import { useNavigate } from "react-router-dom";
import { SEO } from "../../components/atoms";
import { NewsCard } from "../../components/molecules";
import { Grid2, Typography, Box, Container, Button, CircularProgress } from "@mui/material";
import { useGetArticlesSynopsisQuery } from "../../libs/store";

export default function News() {
  const navigate = useNavigate();
  const { data: articles, isLoading } = useGetArticlesSynopsisQuery();

  function goTo(newsId: number) {
    navigate(`/chakero/id/${newsId}`);
  }

  if (isLoading) {
    return (
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          height: '100vh',
        }}
      >
        <CircularProgress color="primary" />
      </Box>
    );
  }

  if (!articles || articles.length === 0) {
    return (
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          height: '100vh',
        }}
      >
        <Typography variant="h6">No articles found</Typography>
      </Box>
    )
  }

  const lastArticle = articles[0];
  const otherArticles = articles.slice(1);

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
          src={lastArticle.cover}
          alt={lastArticle.title}
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
            {lastArticle.title}
          </Typography>
          <Button
            variant="contained"
            onClick={() => goTo(lastArticle.id)}
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
          {otherArticles.map((article) => (
            <Grid2 size={{ xs: 12, sm: 6, md: 4 }} key={article.id}>
              <NewsCard news={article} onClick={goTo} />
            </Grid2>
          ))}
        </Grid2>
      </Container>
    </main>
  );
}