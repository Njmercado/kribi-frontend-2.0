import { Checkbox, ListItemText, MenuItem, Paper } from "@mui/material";
import { useState } from "react";

type OptionType = { [key: string]: string }

export interface MultiSelectProps {
  options: OptionType,
  onChange: (option: Array<string>) => void
  color?: string
}

export default function MultiSelect({
  options,
  onChange,
  color = 'var(--white)'
}: MultiSelectProps) {

  const [chosenCategories, setChosenCategories] = useState<Array<string>>([])

  function handleOnChange(value: string) {

    const isAlreadyChosen = () => chosenCategories.indexOf(value) > -1
    let newChosenCategories = []

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

  return (
    <article style={{ height: '100%', width: '100%' }}>
      <section>
        <Paper sx={{ bgColor: color }}> { buildOptions() } </Paper>
      </section>
    </article>
  )
}