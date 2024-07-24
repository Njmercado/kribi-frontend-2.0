import { Checkbox, ListItemText, MenuItem, Select, SelectChangeEvent } from "@mui/material";
import { useState } from "react";

type OptionType = { [key: string]: string }

export interface MultiSelectProps {
  options: OptionType,
  onChange: (option: string | string[]) => void
}

export default function MultiSelect({
  options,
  onChange
}: MultiSelectProps) {

  const [chosenCategories, setChosenCategories] = useState<Array<string>>([])

  function handleOnChange(event: SelectChangeEvent<typeof chosenCategories>) {
    const { value } = event.target
    setChosenCategories(typeof value === 'string' ? value.split(',') : value)
    onChange(event.target.value)
  }

  function buildOptions() {
    return Object.keys(options).map((optionKey: string, index: number) => (
        <MenuItem key={index} value={optionKey}>
          <Checkbox checked={chosenCategories?.indexOf(optionKey) > -1 ?? false} />
          <ListItemText primary={options[optionKey]} />
        </MenuItem>

    ))
  }

  return (
    <Select
      onChange={handleOnChange}
      multiple={true}
      value={chosenCategories}
      renderValue={(selected: any) => selected.join(', ')}
    >
      { buildOptions() }
    </Select>
  )
}