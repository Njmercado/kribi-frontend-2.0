import './index.css';
import { useState } from 'react';
import { Paper, IconButton, Grid, InputBase, Box } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import { BookCategoryEnum } from '../../../enums';
import { MultiSelect } from '../../atoms';

const Searcher = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [category, setCategory] = useState('all');
  const [documents, setDocuments] = useState([]);
  const [filteredDocuments, setFilteredDocuments] = useState([]);

  const handleSearch = (e: any) => {
    const query = e.target.value;
    setSearchQuery(query);
    filterDocuments(query, category);
  };

  const handleOnMultiSelectChange = (e: any) => {
    const newCategory = e.target.value;
    setCategory(newCategory);
    filterDocuments(searchQuery, newCategory);
  };

  const filterDocuments = (query: any, category: any) => {
    let filteredDocs = documents;
    if (query) {
      filteredDocs = filteredDocs.filter((doc: any) => {
        const title = doc.title.toLowerCase();
        const content = doc.content.toLowerCase();
        const queryLower = query.toLowerCase();
        return title.includes(queryLower) || content.includes(queryLower);
      });
    }
    if (category !== 'all') {
      filteredDocs = filteredDocs.filter((doc: any) => doc.category === category);
    }
    setFilteredDocuments(filteredDocs);
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