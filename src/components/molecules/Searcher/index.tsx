import React, { useState, useEffect } from 'react';
import { TextField, Select, MenuItem, List, ListItem, ListItemText, Grid } from '@mui/material';
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
    <section>
      <Grid container direction='row' columns={4} spacing={2}>
        <Grid item sm={1}>
          <MultiSelect options={BookCategoryEnum} onChange={handleOnMultiSelectChange}/>
        </Grid>
        <Grid item sm={3}>
          <TextField
            label="Search documents"
            value={searchQuery}
            onChange={handleSearch}
            variant="outlined"
            fullWidth
          />
        </Grid>
      </Grid>
    </section>
  );
};

export default Searcher;