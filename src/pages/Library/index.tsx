import React, { useEffect, useState } from "react";
import { Stack, Pagination } from "@mui/material";
import { BOOKS } from "../../constants";
import { Searcher, Books } from "../../components/molecules";
import { IBook } from "../../interfaces";

export default function Library() {

  const BOOKS_LIMIT = 10
  const [books, setBooks] = useState(BOOKS)
  const [paginatedBooks, setPaginatedBooks] = useState<Array<IBook>>([])
  const [page, setPage] = useState<number>(1)

  function sliceBooks() {
    const lowerLimit = (page-1)*BOOKS_LIMIT
    let upperLimit = lowerLimit + BOOKS_LIMIT

    if(upperLimit > books.length) upperLimit = books.length

    return books.slice(lowerLimit, upperLimit)
  }

  useEffect(() => setPaginatedBooks(sliceBooks()), [page, books])
  useEffect(() => { if(page !== 1) setPage(1) }, [books])

  return (
    <main>
      <Stack direction='column' width='100' p={5} alignItems='center'>
        <Searcher data={BOOKS} onChange={setBooks}/>
        <Books books={paginatedBooks}/>
        <Pagination
          sx={{ mt: 5 }}
          count={Math.ceil(books.length/BOOKS_LIMIT)}
          page={page}
          // @ts-expect-error Event is not used but is necessary due i cant use destructure in the onChange function
          onChange={(event: React.ChangeEvent<unknown>, value: number) => setPage(value)}
          size='large'
        />
      </Stack>
    </main>
  )
}