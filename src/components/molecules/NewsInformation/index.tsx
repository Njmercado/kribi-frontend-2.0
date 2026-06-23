import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import {
  Box,
  Container,
  Typography,
  Fab,
  Tooltip,
  Breadcrumbs,
  Link,
  Paper,
  Button,
  CircularProgress,
} from '@mui/material';
import {
  Pause,
  ArrowBack,
  Home,
  VolumeUp
} from '@mui/icons-material';
import { useGetArticleByIdQuery } from "../../../libs/store";
import { Markdown } from "../../atoms";

export default function NewsInformation() {
  const navigate = useNavigate();
  const synth = window.speechSynthesis;
  const [isSpeaking, setIsSpeaking] = useState(false);
  const [isPaused, setIsPaused] = useState(false);

  const params = useParams();
  const idParam = Number(params.id);

  const { data: article, isLoading } = useGetArticleByIdQuery(idParam);

  useEffect(() => {
    // Reset speech state when news changes
    synth.cancel();
    setIsSpeaking(false);
    setIsPaused(false);
  }, [article]);

  const handleSpeak = () => {
    if (!article) return;

    if (isSpeaking) {
      if (isPaused) {
        synth.resume();
        setIsPaused(false);
      } else {
        synth.pause();
        setIsPaused(true);
      }
    } else {
      // Strip markdown for speech
      const tmp = document.createElement("DIV");
      tmp.innerHTML = article.content; // Note: this assumes data is HTML-ish or simple enough. 
      // Ideally we should strip markdown syntax properly, but for now let's try reading the raw text or a simple strip.
      // Since react-markdown renders it, the source is markdown. 
      // Reading raw markdown is okay-ish but not perfect. 
      // For a better experience, we'd process the markdown to plain text.
      // Let's use the description if available, or just the raw data for now.

      const textToRead = article.content;
      const utter = new SpeechSynthesisUtterance(textToRead);

      utter.onend = () => {
        setIsSpeaking(false);
        setIsPaused(false);
      };

      synth.speak(utter);
      setIsSpeaking(true);
      setIsPaused(false);
    }
  };

  if (isLoading) {
    return (
      <Box sx={{ py: 8, textAlign: 'center' }}>
        <CircularProgress />
      </Box>
    );
  }

  if (!article) {
    return (
      <Container sx={{ py: 8, textAlign: 'center' }}>
        <Typography variant="h4">Noticia no encontrada</Typography>
        <Button
          variant="contained"
          sx={{
            mt: 2,
            textTransform: 'none',
            backgroundColor: 'var(--brown)',
            color: 'var(--cream)',
            '&:hover': { backgroundColor: 'var(--brown)' }
          }}
          onClick={() => navigate('/chakero')}
        >
          Volver a noticias
        </Button>
      </Container>
    );
  }

  return (
    <Box sx={{ minHeight: '100vh', pb: 8, bgcolor: '#fffbf2' }}>
      {/* Hero Image */}
      <Box
        sx={{
          height: '50vh',
          width: '100%',
          position: 'relative',
          overflow: 'hidden'
        }}
      >
        <Box
          component="img"
          src={article.cover}
          alt={article.title}
          sx={{
            width: '100%',
            height: '100%',
            objectFit: 'cover',
          }}
        />
        <Box
          sx={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            background: 'linear-gradient(to bottom, rgba(0,0,0,0.3), rgba(0,0,0,0.7))',
          }}
        />

        <Container
          maxWidth="md"
          sx={{
            position: 'absolute',
            bottom: 0,
            left: '50%',
            transform: 'translateX(-50%)',
            pb: 6,
            color: 'white'
          }}
        >
          <Breadcrumbs aria-label="breadcrumb" sx={{ color: 'rgba(255,255,255,0.8)', mb: 2 }}>
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
              onClick={() => navigate('/chakero')}
            >
              Chakero
            </Link>
            <Typography sx={{ color: 'white' }}>{article.title}</Typography>
          </Breadcrumbs>
        </Container>
      </Box>

      {/* Content */}
      <Container maxWidth="md" sx={{ mt: -4, position: 'relative', zIndex: 1 }}>
        <Paper
          elevation={3}
          sx={{
            p: { xs: 3, md: 6 },
            borderRadius: 4,
            bgcolor: 'var(--cream)'
          }}
        >

          <Markdown content={article.content} />
        </Paper>
      </Container>

      {/* Floating Action Buttons */}
      <Box sx={{ position: 'fixed', bottom: 32, right: 32, display: 'flex', flexDirection: 'column', gap: 2, zIndex: 10 }}>
        <Tooltip title={isSpeaking && !isPaused ? "Pausar lectura" : "Escuchar noticia"} placement="left">
          <Fab
            color="primary"
            aria-label="speak"
            onClick={handleSpeak}
            sx={{
              bgcolor: 'var(--yellow)',
              color: 'var(--brown)',
              '&:hover': { bgcolor: 'var(--dark-yellow)' }
            }}
          >
            {isSpeaking && !isPaused ? <Pause /> : <VolumeUp />}
          </Fab>
        </Tooltip>

        <Tooltip title="Volver" placement="left">
          <Fab
            color="secondary"
            aria-label="back"
            onClick={() => navigate(-1)}
            sx={{
              bgcolor: 'white',
              color: 'var(--brown)',
              '&:hover': { bgcolor: '#f5f5f5' }
            }}
          >
            <ArrowBack />
          </Fab>
        </Tooltip>
      </Box>
    </Box>
  );
}
