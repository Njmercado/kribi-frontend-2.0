import React, { useEffect, useState } from "react";
import { Stack, Pagination } from "@mui/material";
import { BOOKS } from "../../constants";
import { Books } from "../../components/molecules";
import { IBook } from "../../interfaces";
import FilterSearcher from "../../components/molecules/FilterSearcher";
import { BookCategoryEnum } from "../../enums";

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
    <main style={{ backgroundColor: 'var(--white)' }}>
      <Stack direction='column' width='100' p={5} alignItems='center'>
        <FilterSearcher
          bgColor="var(--dark-brown)"
          color='var(--white)'
          items={books}
          onChange={setBooks}
          placeholder='Busca libros'
          options={BookCategoryEnum}
          propertyToFilterBy='name'
          filterByOptions={(books: Array<IBook>, chosenCategories: Array<string>) => {
            if (chosenCategories.length === 0) return books
            return books.filter((book: IBook) => chosenCategories.includes(book.type.toUpperCase()));
          }}
        />
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