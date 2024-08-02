import { Box, Grid, Card, CardContent, Skeleton, Typography, CardActions, Button, Dialog } from "@mui/material";
import { GAMES } from "../../constants";
import { IGame } from "../../interfaces";
import { useEffect, useState } from "react";
import { CardsGame } from "../../components/organisms";

export interface GamesProps {

}

export default function Games({ }: GamesProps) {

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
      case 'CardsGame':
        return <CardsGame/>
      default:
        return ''
    }
  }

  return (
    <main>
      <Dialog open={open} onClose={handleOnCloseDialog}>
        { getDialogContent(game) }
      </Dialog>
      <Box sx={{ p: 5 }}>
        <Grid container direction='row' columns={3} justifyContent='space-around' spacing={5}>
          {
            GAMES.map((game: IGame, index: number) => (
              <Grid item sm={1} key={index}>
                <Card>
                  <Skeleton variant='rectangular' width='100%' height='20vh' animation='wave' />
                  <CardContent>
                    <Typography variant='h4'>{game.name}</Typography>
                    <Typography variant='body1'>{game.description}</Typography>
                  </CardContent>
                  <CardActions style={{ justifyContent: 'flex-end' }}>
                    <Button onClick={() => setGame(game.id)}>Abrir</Button>
                  </CardActions>
                </Card>
              </Grid>
            ))
          }
        </Grid>
      </Box>
    </main>
  )
}