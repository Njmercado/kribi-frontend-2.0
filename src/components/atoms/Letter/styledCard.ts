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
  transition: 'transform 0.2s',
  backgroundColor: 'var(--yellow)',
  color: 'var(--brown)',
  ":hover": {
    backgroundColor: 'var(--light-brown)',
    color: 'var(--white)',
    transform: 'scale(1.2)'
  },
  "&.active": {
    backgroundColor: 'var(--light-brown)',
    color: 'var(--white)',
    transform: 'scale(1.5)',
    margin: '0 10px'
  }
}))