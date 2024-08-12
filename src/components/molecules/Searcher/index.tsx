import './index.css';
import { useState } from 'react';
import { Paper, IconButton, Grid, InputBase, Box } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import { BookCategoryEnum } from '../../../enums';
import { MultiSelect } from '../../atoms';
import { IBook } from '../../../interfaces';

export interface SearcherProps {
  data: Array<IBook>
  onChange: (value: Array<IBook>) => void
}

const Searcher = ({
  data,
  onChange,
}: SearcherProps) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [category, setCategory] = useState<Array<string>>([]);

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const query = e.target.value;
    setSearchQuery(query);
    filterDocuments(query, category);
  };

  const handleOnMultiSelectChange = (categories: Array<string>) => {
    setCategory(categories)
    filterDocuments(searchQuery, categories);
  };

  const filterByDocName = (query: string): Array<IBook> => {

    if (query.length === 0) return data

    return data.filter((doc: IBook) => {
      const name = doc.name.toLowerCase();
      const queryLower = query.toLowerCase();
      return name.includes(queryLower);
    });
  }

  const filterByCategory = (filteredByName: Array<IBook>, categoryList: Array<string>): Array<IBook> => {

    if (categoryList.length === 0) return filteredByName

    return filteredByName.filter((book: IBook) => categoryList.includes(book.type.toUpperCase()));
  }

  const filterDocuments = (query: string, categorySelect: Array<string>) => {
    let filteredDocs: Array<IBook> = filterByDocName(query)
    filteredDocs = filterByCategory(filteredDocs, categorySelect)
    onChange(filteredDocs);
  };

  return (
    <Box className='searcher-container' style={{ height: '5vh' }}>
      <Grid container direction='row' columns={12} alignItems='center' spacing={2}>
        <Grid item sm={8}>
          <Paper>
            <IconButton>
              <SearchIcon />
            </IconButton>
            <InputBase
              placeholder='Nombre libro'
              value={searchQuery}
              onChange={handleSearch}
            />
          </Paper>
        </Grid>
        <Grid item sm={4}>
          <Paper>
            <MultiSelect options={BookCategoryEnum} onChange={handleOnMultiSelectChange} />
          </Paper>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Searcher;