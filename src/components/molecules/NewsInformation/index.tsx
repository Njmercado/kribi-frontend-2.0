import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { AVAILABLE_NEWS } from "../../../constants";
import Markdown from "react-markdown";
import { INews } from "../../../interfaces";
import {
  Box,
  Container,
  Typography,
  Fab,
  Tooltip,
  Breadcrumbs,
  Link,
  Paper,
  Button
} from '@mui/material';
import {
  Pause,
  ArrowBack,
  Home,
  VolumeUp
} from '@mui/icons-material';

export default function NewsInformation() {
  const navigate = useNavigate();
  const synth = window.speechSynthesis;
  const [news, setNews] = useState<INews | undefined>();
  const [isSpeaking, setIsSpeaking] = useState(false);
  const [isPaused, setIsPaused] = useState(false);

  const params = useParams();
  const idParam = Number(params.id);

  useEffect(() => {
    const foundNews = AVAILABLE_NEWS.find(item => item.id === idParam);
    setNews(foundNews);

    return () => {
      synth.cancel();
    };
  }, [idParam]);

  useEffect(() => {
    // Reset speech state when news changes
    synth.cancel();
    setIsSpeaking(false);
    setIsPaused(false);
  }, [news]);

  const handleSpeak = () => {
    if (!news) return;

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
      tmp.innerHTML = news.data; // Note: this assumes data is HTML-ish or simple enough. 
      // Ideally we should strip markdown syntax properly, but for now let's try reading the raw text or a simple strip.
      // Since react-markdown renders it, the source is markdown. 
      // Reading raw markdown is okay-ish but not perfect. 
      // For a better experience, we'd process the markdown to plain text.
      // Let's use the description if available, or just the raw data for now.

      const textToRead = news.data;
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

  if (!news) {
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
          src={news.image}
          alt={news.name}
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
            <Typography sx={{ color: 'white' }}>{news.name}</Typography>
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
          <Box sx={{
            typography: 'body1',
            fontFamily: 'Inter, sans-serif',
            fontSize: '1.1rem',
            lineHeight: 1.8,
            color: 'var(--brown)',
            '& h1, & h2, & h3': {
              fontFamily: 'Outfit, sans-serif',
              color: 'var(--brown)',
              mt: 4,
              mb: 2
            },
            '& p': {
              mb: 2
            },
            '& img': {
              maxWidth: '100%',
              height: 'auto',
              borderRadius: 2,
              my: 3,
              display: 'block',
              mx: 'auto'
            },
            '& blockquote': {
              borderLeft: '4px solid var(--yellow)',
              pl: 2,
              fontStyle: 'italic',
              my: 3,
              color: 'text.secondary'
            }
          }}>
            <Markdown>{news.data}</Markdown>
          </Box>
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