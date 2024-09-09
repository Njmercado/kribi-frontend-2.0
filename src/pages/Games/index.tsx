import { Box, Grid, Card, CardContent, Skeleton, Typography, CardActions, Button, Dialog, DialogContent } from "@mui/material";
import { GAMES } from "../../constants";
import { IGame } from "../../interfaces";
import { useEffect, useState } from "react";
import { BuildWordsGame } from "../../components/organisms";
import { CardGameTemplate } from "../../components/atoms";

export interface GamesProps {

}

export default function Games() {

  const RESET_CHOSEN_GAME = ''
  const [game, setGame] = useState<string>('')
  const [open, setOpen] = useState<boolean>(false)

  useEffect(() => {
    if (game !== '') setOpen(true)
    else setOpen(false)
  }, [game])

  function handleOnCloseDialog() {
    setGame(RESET_CHOSEN_GAME);
  }

  function getDialogContent(gameName: string) {
    switch(gameName) {
      case 'BuildWordsGame':
        return <BuildWordsGame/>
      default:
        return ''
    }
  }

  return (
    <main>
      <Dialog open={open} onClose={handleOnCloseDialog} fullWidth={true}>
        <DialogContent sx={{ minHeight: '50vh' }}>
          { getDialogContent(game) }
        </DialogContent>
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