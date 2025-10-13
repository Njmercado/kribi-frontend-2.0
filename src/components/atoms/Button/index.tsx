import './index.css'

import { ButtonBase, Typography } from '@mui/material'

export interface ButtonProps {
  value: string;
  onClick: () => void;
  disabled?: boolean;
  type?: 'primary' | 'secondary';
}

export default function Button({
  value,
  onClick,
  disabled,
  type = 'primary'
}: ButtonProps) {
  return (
    <ButtonBase
      sx={{
        backgroundColor: type === 'primary' ? 'var(--yellow)' : 'var(--brown)',
        color: type === 'primary' ? 'var(--brown)' : 'var(--yellow)',
        padding: '12px',
        borderRadius: '10px',
        transition: 'color 200ms ease-in-out, background-color 200ms ease-in-out',
        '&:hover': {
          backgroundColor: type === 'primary' ? 'var(--brown)' : 'var(--dark-yellow)',
          color: type === 'primary' ? 'var(--yellow)' : 'var(--light-yellow)',
        }
      }}
      onClick={onClick}
      disabled={disabled}
    >
      <Typography fontWeight={600} variant="subtitle1">
        {value}
      </Typography>
    </ButtonBase>
  )
}
