import { useState } from "react";
import { Grid, Stack, Pagination } from "@mui/material";
import { BOOKS } from "../../constants";
import { Book, Searcher } from "../../components/molecules";
import { IBook } from "../../interfaces";

export default function Library() {

	const [page, setPage] = useState<number>(1)

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

	function handleOnChangePagination(event: React.ChangeEvent<unknown>, value: number) {
		setPage(value);
	}

  return (
    <main>
      <Stack direction='column' width='100' p={5} alignItems='center'>
        <Searcher></Searcher>
        <Grid container direction='row' columns={4} justifyContent='space-around' spacing={2} mt={5}>
          {buildBooks()}
        </Grid>
        <Pagination
          sx={{ mt: 5 }}
					count={10}
					page={page}
					onChange={handleOnChangePagination}
					size='large'
				/>
      </Stack>
    </main>
  )
}