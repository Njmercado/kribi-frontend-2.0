import { Grid } from "@mui/material";
import { AVAILABLE_NEWS } from "../../constants";
import { INews } from "../../interfaces";
import { NewsSummarize } from "../../components/atoms";

export default function News() {

  const AVAILABLE_NEWS_COPY = [...AVAILABLE_NEWS]

  function getNews(): INews {
    const random = Math.floor(Math.random() * AVAILABLE_NEWS_COPY.length)
    return AVAILABLE_NEWS_COPY.splice(random, 1)[0]
  }

  return (
    <main style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
      <article style={{ width: '70vw' }}>
        <Grid container direction='row' columns={2}>
          <Grid item sm={1}>
            <NewsSummarize news={getNews()}/>
          </Grid>
          <Grid item sm={1}>
            <Grid container direction='column' columns={2}>
              <Grid item sm={1}>
                <NewsSummarize news={getNews()}/>
              </Grid>
              <Grid item sm={1}>
                <Grid container direction='row' columns={2}>
                  <Grid item sm={1}>
                    <NewsSummarize news={getNews()}/>
                  </Grid>
                  <Grid item sm={1}>
                    <NewsSummarize news={getNews()}/>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </article>
    </main>
  )
}