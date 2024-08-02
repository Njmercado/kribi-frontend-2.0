import { Checkbox, Chip, ListItemText, MenuItem, Select, SelectChangeEvent } from "@mui/material";
import { useState } from "react";

type OptionType = { [key: string]: string }

export interface MultiSelectProps {
  options: OptionType,
  onChange: (option: Array<string>) => void
}

export default function MultiSelect({
  options,
  onChange
}: MultiSelectProps) {

  const [chosenCategories, setChosenCategories] = useState<Array<string>>([])

  function handleOnChange(event: SelectChangeEvent<typeof chosenCategories>) {
    const { value } = event.target
    const splittedValue = typeof value === 'string' ? value.split(',') : value
    setChosenCategories(splittedValue)
    onChange(splittedValue)
  }

  function buildOptions() {
    return Object.keys(options).map((optionKey: string, index: number) => (
      <MenuItem key={index} value={optionKey}>
        <Checkbox checked={chosenCategories?.indexOf(optionKey) > -1} />
        <ListItemText primary={options[optionKey]} />
      </MenuItem>
    ))
  }

  return (
    <Select
      displayEmpty
      sx={{ width: '100%', height: '100%', px: 1 }}
      variant='standard'
      onChange={handleOnChange}
      multiple={true}
      value={chosenCategories}
      renderValue={(selected: any) => {

        if (selected.length === 0) {
          return <span>Categorias</span>;
        }

        return selected.map((value: string) => (
          <Chip key={value} label={value} />
        ))
      }}
      MenuProps={{
        PaperProps: {
          style: {
            maxHeight: Object.keys(options).length * 30,
            width: 100
          }
        }
      }}
    >
      <MenuItem disabled value="">
        <em>Categoria</em>
      </MenuItem>
      {buildOptions()}
    </Select>
  )
}