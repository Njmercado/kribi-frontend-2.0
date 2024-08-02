import { Grid } from "@mui/material";
import { IBook } from "../../../interfaces";
import Book from "../Book";

export interface BooksProps {
  books: Array<IBook>
}

export default function Books({
  books
}: BooksProps) {
  return <Grid container direction='row' columns={4} justifyContent='space-around' spacing={2} mt={5}>
    {
      books.map((book: IBook, index: number) => (
        <Grid item xs={1} key={index}>
          <Book
            name={book.name}
            image={book.image}
            type={book.type}
            url={book.url}
          />
        </Grid>
      ))
    }
  </Grid >
}