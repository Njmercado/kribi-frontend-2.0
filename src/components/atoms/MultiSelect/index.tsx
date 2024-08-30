import { FilterAlt } from "@mui/icons-material";
import { Checkbox, IconButton, ListItemText, MenuItem, Paper } from "@mui/material";
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

  function handleOnChange(value: string) {

    const isAlreadyChosen = () => chosenCategories.indexOf(value) > -1
    var newChosenCategories = []

    if(isAlreadyChosen()) {
      newChosenCategories = chosenCategories.filter((category: string) => category !== value)
    } else {
      newChosenCategories = [...(new Set([...chosenCategories, value]))]
    }

    setChosenCategories(newChosenCategories)
    onChange(newChosenCategories)
  }

  function buildOptions() {
    return Object.keys(options).map((optionKey: string, index: number) => (
      <MenuItem key={index} value={optionKey} onClick={() => handleOnChange(optionKey)}>
        <Checkbox checked={chosenCategories?.indexOf(optionKey) > -1} />
        <ListItemText primary={options[optionKey]} />
      </MenuItem>
    ))
  }

  const [open, setOpen] = useState(false)

  function handleOnClickFilterButton() {
    setOpen(!open)
  }

  return (
    <article style={{ position: 'relative' }}>
      <section>
        <IconButton onClick={handleOnClickFilterButton} size="large">
          <FilterAlt/>
        </IconButton>
      </section>
      {
        open && 
      <section style={{ position: 'absolute', zIndex: 10, maxHeight: '50px' }}>
        <Paper> { buildOptions() } </Paper>
      </section>
      }
    </article>
  )
}