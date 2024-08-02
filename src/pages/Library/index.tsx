import React, { useState } from "react";
import { Stack, Pagination } from "@mui/material";
import { BOOKS } from "../../constants";
import { Searcher, Books } from "../../components/molecules";

export default function Library() {

  const [books, setBooks] = useState(BOOKS)
  const [page, setPage] = useState<number>(1)

  function handleOnChangePagination(event: React.ChangeEvent<unknown>, value: number) {
    setPage(value);
  }

  return (
    <main>
      <Stack direction='column' width='100' p={5} alignItems='center'>
        <Searcher data={BOOKS} onChange={setBooks}/>
        <Books books={books}/>
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