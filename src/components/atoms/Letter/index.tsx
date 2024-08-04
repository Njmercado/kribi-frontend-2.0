import { Typography } from "@mui/material"
import { StyledCard } from "./styledCard"
import { Variant } from "@mui/material/styles/createTypography"

interface ILetter {
  value: string
  onClick?: (value: string) => void
  size?: 'small' | 'mediun' | 'large'
  disabled?: boolean,
  className?: string,
  style?: React.CSSProperties
}

export interface LetterProps extends ILetter {}

export default function Letter({
  value,
  onClick,
  size,
  disabled,
  className,
  style
}: LetterProps) {

  function handleOnClick() {
    if(!disabled) {
      onClick?.(value)
    }
  }

  function getTypographyVariant(): Variant {
    switch(size) {
      case 'small':
        return 'h5'
      case 'mediun':
        return 'h4'
      case 'large':
        return 'h2'
      default:
        return 'h6'
    }
  }

  return (
		<StyledCard disabled={disabled} size={size} onClick={handleOnClick} className={className} style={style}>
      <Typography variant={getTypographyVariant()}>
        {value}
      </Typography>
    </StyledCard>
  )
}