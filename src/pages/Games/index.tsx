import { Box, Grid, Dialog, useTheme, useMediaQuery, Stack, Typography } from "@mui/material";
import { GAMES } from "../../constants";
import { IGame } from "../../interfaces";
import { useEffect, useState } from "react";
import { BuildWordsGame, FlipCardGame } from "../../components/organisms";
import { SEO } from "../../components/atoms";
import { CardGameTemplate } from "../../components/molecules";

export default function Games() {

  const RESET_CHOSEN_GAME = ''
  const [game, setGame] = useState<string>('')
  const [open, setOpen] = useState<boolean>(false)

  const theme = useTheme();
  const smallScreen = useMediaQuery(theme.breakpoints.down('md'));

  useEffect(() => {
    if (game !== '') setOpen(true)
    else setOpen(false)
  }, [game])

  function handleOnCloseDialog() {
    setGame(RESET_CHOSEN_GAME);
  }

  function getDialogContent(gameName: string) {
    switch (gameName) {
      case 'BuildWordsGame':
        return <BuildWordsGame />
      case 'FlipCardGame':
        return <FlipCardGame />
      default:
        return ''
    }
  }

  function getGameName(gameName: string) {
    return GAMES.find(g => g.id === gameName)?.name || ''
  }

  return (
    <main>
      <SEO
        title="Juegos"
        description="Diviértete y aprende con los juegos de Kribí: Memoria Palenquera."
      />
      <Dialog open={open} onClose={handleOnCloseDialog} maxWidth='lg' fullWidth={!smallScreen} fullScreen={smallScreen}>
        <Stack direction='row' spacing={2} justifyContent='space-between' sx={{ p: 1, backgroundColor: 'var(--yellow)' }}>
          <Typography variant="h4" sx={{ fontWeight: 'bold', color: 'var(--brown)' }}>{getGameName(game)}</Typography>
          <Typography sx={{ cursor: 'pointer', backgroundColor: 'var(--white)', padding: '1px 8px', borderRadius: '5px' }} variant="h4" onClick={handleOnCloseDialog}>x</Typography>
        </Stack>
        {getDialogContent(game)}
      </Dialog>
      <Box sx={{ p: 5 }}>
        <Grid container direction='row' columns={3} justifyContent='space-around' spacing={5}>
          {
            GAMES.map((game: IGame, index: number) => (
              <Grid item sm={1} key={index}>
                <CardGameTemplate
                  id={game.id}
                  name={game.name}
                  description={game.description}
                  onClick={setGame}
                />
              </Grid>
            ))
          }
        </Grid>
      </Box>
    </main>
  )
}