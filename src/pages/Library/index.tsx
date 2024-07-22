import { BOOKS } from "../../constants";
import { Book } from "../../components/molecules";
import { IBook } from "../../interfaces";
import { Grid } from "@mui/material";

export default function Library() {

  function buildBooks() {
    return BOOKS.map((book: IBook, index: number) => (
      <Grid item xs={1}>
        <Book
          name={book.name}
          image={book.image}
          type={book.type}
          url={book.url}
          key={index}
        />
      </Grid>
    ))
  }

  return (
    <main>
      <Grid container direction='row' columns={4} justifyContent='space-around' gap={2} p={5}>
        {buildBooks()}
      </Grid>
    </main>
  )
}