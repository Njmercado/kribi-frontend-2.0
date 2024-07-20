import { Card, styled } from "@mui/material"

function getSize(size?: 'small' | 'mediun' | 'large'): string {
  switch(size) {
    case 'small':
      return '50px'
    case 'mediun':
      return '75px'
    case 'large':
      return '100px'
    default:
      return '10px'
  }
}

export const StyledCard = styled(Card)(({size, disabled}: {size?: 'small' | 'mediun' | 'large', disabled?: boolean}) => ({
  cursor: disabled? '': 'pointer',
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'center',
  alignItems: 'center',
  width: getSize(size),
  height: getSize(size),
}))