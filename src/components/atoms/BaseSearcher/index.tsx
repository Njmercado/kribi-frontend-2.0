import { Grid, IconButton, InputBase, Paper } from "@mui/material"
import SearchIcon from '@mui/icons-material/Search';
import { useState } from "react";

export interface BaseSearcherProps {
  bgColor?: string
  color?: string
  placeholder: string
  onChange: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void
  action?: React.ReactNode
  onSearch?: () => void
  searchLocation?: 'left' | 'right'
}

export default function BaseSearcher({
  placeholder,
  onChange,
  bgColor = 'var(--white)',
  color = 'var(--brown)',
  action,
  onSearch,
  searchLocation = 'left'
}: BaseSearcherProps) {

  const [value, setValue] = useState<string>('');

  function handleOnChange(event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
    const value = event.target.value;
    setValue(value);
    onChange(event);
  }

  return (
    <Paper style={{ borderRadius: '10px', padding: '5px', backgroundColor: bgColor, minWidth: '50%' }}>
      <Grid container columns={12} direction='row' spacing={2} justifyContent='center' alignItems='center'>
        {
          searchLocation === 'left' &&
          <Grid item sm={1}>
            <IconButton sx={{ color: color }} onClick={onSearch}>
              <SearchIcon />
            </IconButton>
          </Grid>
        }
        <Grid item sm={action? 10: 11}>
          <InputBase
            placeholder={placeholder}
            value={value}
            onChange={handleOnChange}
            fullWidth={true}
            sx={{ color: color }}
          />
        </Grid>
        {
          searchLocation === 'right' &&
          <Grid item sm={1}>
            <IconButton sx={{ color: color }} onClick={onSearch}>
              <SearchIcon />
            </IconButton>
          </Grid>
        }
        {
          action &&
          <Grid item sm={1}>
            {action}
          </Grid>
        }
      </Grid>
    </Paper>
  )
}