import './index.css';
import { useEffect, useState } from 'react';
import { BaseSearcher } from '../../atoms';
import { Chip, Grid2, Stack } from '@mui/material';

export interface FilterSearcherProps {
  onChange: (query: string, filter: Array<string> | undefined) => void
  bgColor?: string
  color?: string
  placeholder: string
  filterOptions?: Array<string> | { [key: string]: string }
}

export default function FilterSearcher({
  onChange,
  bgColor = 'var(--white)',
  color = 'var(--brown)',
  placeholder,
  filterOptions,
}: FilterSearcherProps) {
  const [searchQuery, setSearchQuery] = useState('');
  const [chosenOptions, setChosenOptions] = useState<{ [key: string]: boolean }>({});

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const query = e.target.value;
    setSearchQuery(query);
  };

  useEffect(() => {
    const selectedFilters = Object
      .keys(chosenOptions)
      .filter((key) => chosenOptions[key])
      .map((key) => (filterOptions as { [key: string]: string })[key]);

    onChange(searchQuery, selectedFilters);
  }, [searchQuery, chosenOptions]);

  function handleChosenFilter(keyOption: string) {
    if (!chosenOptions[keyOption]) {
      setChosenOptions((options) => ({ ...options, [keyOption]: true }))
    } else {
      setChosenOptions((options) => ({ ...options, [keyOption]: !chosenOptions[keyOption] }))
    }
  }

  return (
    <Stack direction='column' justifyContent='center' alignItems='center' width='100%' p={1} spacing={2} >
      <BaseSearcher
        placeholder={placeholder}
        onChange={handleSearch}
        bgColor={bgColor}
        color={color}
      />
      <Grid2 container flex='wrap' direction='row' spacing={1} justifyContent='center' alignItems='center'>
        {
          filterOptions && Object.keys(filterOptions || {}).map((key: string) => (
            <Chip
              key={key}
              label={(filterOptions as { [key: string]: string } )[key]}
              sx={{ backgroundColor: chosenOptions[key] ? 'var(--dark-yellow)' : 'var(--yellow)' }}
              onClick={() => handleChosenFilter(key)}
            />
          ))
        }
      </Grid2>
    </Stack>
  )
}
