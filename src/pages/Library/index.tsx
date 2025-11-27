import { useEffect, useState } from "react";
import { Pagination, Stack } from "@mui/material";
import { BOOKS } from "../../constants";
import { Books } from "../../components/molecules";
import { IBook } from "../../interfaces";
import FilterSearcher from "../../components/molecules/FilterSearcher";
import { BookCategoryEnum } from "../../enums";
import { SEO } from "../../components/atoms";

export default function Library() {

  const BOOKS_LIMIT = 10
  const [books, setBooks] = useState(BOOKS)
  const [paginatedBooks, setPaginatedBooks] = useState<Array<IBook>>([])
  const [page, setPage] = useState<number>(1)

  function sliceBooks() {
    const lowerLimit = (page - 1) * BOOKS_LIMIT
    let upperLimit = lowerLimit + BOOKS_LIMIT

    if (upperLimit > books.length) upperLimit = books.length

    return books.slice(lowerLimit, upperLimit)
  }

  useEffect(() => setPaginatedBooks(sliceBooks()), [page, books])
  useEffect(() => { if (page !== 1) setPage(1) }, [books])

  // TODO: Look for a better way to implement the filter and search, there is so much loops.
  function queryBooks(query: string, filters: Array<string> | undefined) {
    if (query.length === 0 && filters?.length === 0) {
      setBooks(BOOKS)
      return
    }

    const filteredBooks = BOOKS.filter((book: IBook) => {
      const bookName = book.name.toLowerCase()
      const queryLower = query.toLowerCase()

      if (query.length === 0) {
        return filters?.includes(book.type)
      }

      if (filters?.length === 0) {
        return bookName.includes(queryLower)
      }

      return (
        bookName.includes(queryLower) &&
        filters?.includes(book.type)
      )
    })

    setBooks(filteredBooks)
  }

  return (
    <main style={{ backgroundColor: 'var(--white)' }}>
      <SEO
        title="Biblioteca"
        description="Encuentra libros en la biblioteca de Kribí. Libros en Palenquero y Espanol con diversidad de temas gastronomicos, historicos, filosoficos, entre otros."
      />
      <Stack direction='column' spacing={2} alignItems='center' justifyContent='center' width='100%' p={1}>
        <FilterSearcher
          bgColor="var(--dark-brown)"
          color='var(--white)'
          onChange={queryBooks}
          placeholder='Busca libros'
          filterOptions={BookCategoryEnum}
        />
        <Books books={paginatedBooks} />
        <Pagination
          sx={{ mt: 5 }}
          count={Math.ceil(books.length / BOOKS_LIMIT)}
          page={page}
          onChange={(_, value: number) => setPage(value)}
          size='large'
        />
      </Stack>
    </main>
  )
}
