import './index.css'
import { useEffect, useState } from 'react'
import { Button, Stack, Typography, Box, Grid2 } from "@mui/material";
import { getRandomWords } from "../../../api/index";
import { IWord } from '../../../interfaces';
import LoopIcon from '@mui/icons-material/Loop';
import CardComponent from './Card';

interface CardData {
  id: number;
  content: string;
  type: 'word' | 'translation';
  isFlipped: boolean;
  isMatched: boolean;
  pairId: number;
}

interface GameStats {
  attempt: number;
  score: number;
}

const MATCHED_TARGET = 8

export default function FlipCardGame() {
  const [cards, setCards] = useState<CardData[]>([]);
  const [flippedCardIds, setFlippedCardIds] = useState<number[]>([]);
  const [matchedPairs, setMatchedPairs] = useState<number>(0);
  const [loading, setLoading] = useState<boolean>(true);
  const [attempts, setAttempts] = useState<Array<GameStats>>([]);
  const [showGameWon, setShowGameWon] = useState<boolean>(false);

  useEffect(() => {
    startNewGame();
  }, []);

  async function startNewGame() {
    setLoading(true);
    setMatchedPairs(0);
    setFlippedCardIds([]);
    setShowGameWon(false);

    const wordsData = await getRandomWords(MATCHED_TARGET);

    const gameCards: CardData[] = [];
    wordsData.forEach((wordData: IWord, index: number) => {
      // Card for the word in Palenque
      gameCards.push({
        id: index * 2,
        content: wordData.word,
        type: 'word',
        isFlipped: false,
        isMatched: false,
        pairId: index
      });
      // Card for the translation (using the first definition)
      gameCards.push({
        id: index * 2 + 1,
        content: wordData.definitions[0],
        type: 'translation',
        isFlipped: false,
        isMatched: false,
        pairId: index
      });
    });

    // Shuffle cards
    const shuffledCards = gameCards.sort(() => Math.random() - 0.5);
    setCards(shuffledCards);
    setLoading(false);
    setAttempts([...attempts, { attempt: attempts.length + 1, score: 0 }]);
  }

  const handleCardClick = (id: number) => {
    // Find the card
    const clickedCard = cards.find(c => c.id === id);

    // Validation: if card not found, already flipped, matched, or 2 cards already flipped
    if (!clickedCard || clickedCard.isFlipped || clickedCard.isMatched || flippedCardIds.length >= 2) {
      return;
    }

    // Flip the card
    const newCards = cards.map(card =>
      card.id === id ? { ...card, isFlipped: true } : card
    );
    setCards(newCards);

    const newFlippedCardIds = [...flippedCardIds, id];
    setFlippedCardIds(newFlippedCardIds);

    if (newFlippedCardIds.length === 2) {
      const newAttempts = [...attempts];
      newAttempts[newAttempts.length - 1].score++;
      setAttempts(newAttempts);
      checkForMatch(newFlippedCardIds, newCards);
    }
  };

  const checkForMatch = (currentFlippedIds: number[], currentCards: CardData[]) => {
    const [id1, id2] = currentFlippedIds;
    const card1 = currentCards.find(c => c.id === id1);
    const card2 = currentCards.find(c => c.id === id2);

    const isMatch = card1?.pairId === card2?.pairId;

    if (isMatch) {

      // If is a match, mark the cards as matched
      const newCards = currentCards.map(card =>
        card.id === id1 || card.id === id2
          ? { ...card, isMatched: true }
          : card
      );
      setCards(newCards);
      setMatchedPairs(prev => prev + 1);
      setFlippedCardIds([]);
    } else {

      // If is not a match, flip the cards back after 1 second
      setTimeout(() => {
        const newCards = currentCards.map(card =>
          card.id === id1 || card.id === id2
            ? { ...card, isFlipped: false }
            : card
        );
        setCards(newCards);
        setFlippedCardIds([]);
      }, 2000);
    }
  };

  useEffect(() => {
    if (matchedPairs === MATCHED_TARGET) {
      setTimeout(() => {
        setShowGameWon(true);
      }, 1000);
    }
  }, [matchedPairs]);

  if (loading) {
    return (
      <div className='loader-container'>
        <LoopIcon className='animation-spin' style={{ fontSize: '100px' }} />
      </div>
    );
  }

  return (
    <Grid2 container direction="row" columns={12} justifyContent="space-around" className="flip-card-game" spacing={2}>
      <Grid2 container direction="column" spacing={1} size={{ xs: 12, sm: 12, md: 4, lg: 4, xl: 4 }}>

        <Typography variant="h4" sx={{ fontWeight: 'bold' }} textAlign="center">Movimientos: {attempts[attempts.length - 1]?.score ?? 0}</Typography>

        <Box mt={1} overflow="auto" maxHeight="200px">
          {
            attempts.slice(0, attempts.length - 1).map((attempt, index) => (
              <Stack direction="row" spacing={1} key={index} justifyContent="center" mt={1}>
                <Typography sx={{ fontWeight: 'bold', p: '2px', borderRadius: '8px' }} variant="body1" bgcolor="var(--yellow)">Ronda {index + 1}</Typography>
                <Typography variant="body1" sx={{ fontWeight: 'bold' }}>{attempt.score}</Typography>
              </Stack>
            ))
          }
        </Box>
      </Grid2>

      {matchedPairs === MATCHED_TARGET && showGameWon ? (
        <Stack>
          <Typography variant="h5" sx={{ color: 'var(--green)', fontWeight: 'bold' }}>
            ¡Felicitaciones! Has encontrado todas las parejas.
          </Typography>
          <Button variant="contained" onClick={startNewGame} sx={{ backgroundColor: 'var(--yellow)', color: 'var(--brown)', fontWeight: 'bold', mt: 2 }}>
            Siguiente Ronda
          </Button>
        </Stack>
      ) :
        <Grid2 container size={{ xs: 12, sm: 12, md: 8, lg: 8, xl: 8 }} justifyContent="center">
          <Box className="flip-card-grid">
            {cards.map(card => (
              <CardComponent
                key={card.id}
                id={card.id}
                content={card.content}
                isFlipped={card.isFlipped}
                isMatched={card.isMatched}
                onClick={handleCardClick}
              />
            ))}
          </Box>
        </Grid2>
      }
    </Grid2>
  )
}
