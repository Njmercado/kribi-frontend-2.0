import { Grid2, IconButton, InputBase, Paper, Divider } from "@mui/material"
import SearchIcon from '@mui/icons-material/Search';
import { useState } from "react";

export interface BaseSearcherProps {
  bgColor?: string
  color?: string
  placeholder: string
  onChange: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void
  onSearch?: () => void
}

export default function BaseSearcher({
  placeholder,
  onChange,
  bgColor = 'var(--white)',
  color = 'var(--brown)',
  onSearch,
}: BaseSearcherProps) {

  const [value, setValue] = useState<string>('');

  function handleOnChange(event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
    const value = event.target.value;
    setValue(value);
    onChange(event);
  }

  return (
    <Paper style={{ borderRadius: '10px', padding: '5px', backgroundColor: bgColor, minWidth: '50%', height: '40px' }}>
      <Grid2 container columns={12} direction='row' spacing={2} justifyContent='space-between' alignItems='center'>
        <Grid2 size={10}>
          <InputBase
            placeholder={placeholder}
            value={value}
            onChange={handleOnChange}
            fullWidth={true}
            sx={{ color: color, px: 2 }}
          />
        </Grid2>
        <Divider orientation="vertical" />
        <Grid2 size={1}>
          <IconButton sx={{ color: color }} onClick={onSearch}>
            <SearchIcon />
          </IconButton>
        </Grid2>
      </Grid2>
    </Paper>
  )
}