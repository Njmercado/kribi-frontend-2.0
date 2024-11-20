import { Fab } from "@mui/material";

export interface IFloatingButtonProps {
  onClick: () => void
  icon: React.ReactNode
  color: string
  position?: 'top left' | 'top right' | 'bottom left' | 'bottom right' | 'center' | 'center left' | 'center right' | 'center top' | 'center bottom'
}

export default function FloatingButton({
  onClick,
  icon,
  color = 'primary',
  position = 'bottom right'
}: IFloatingButtonProps) {

  function getPosition() {
    switch (position) {
      case 'top left':
        return { top: 20, left: 20 }
      case 'top right':
        return { top: 20, right: 20 }
      case 'bottom left':
        return { bottom: 20, left: 20 }
      case 'bottom right':
        return { bottom: 20, right: 20 }
      case 'center':
        return { top: '50%', left: '50%' }
      case 'center left':
        return { top: '50%', left: 20 }
      case 'center right':
        return { top: '50%', right: 20 }
      case 'center top':
        return { top: 20, left: '50%' }
      case 'center bottom':
        return { bottom: 20, left: '50%' }
      default:
        return { bottom: 20, right: 20 }
    }
  }

  return (
    <Fab
      aria-label="add"
      onClick={onClick}
      style={{
        position: 'fixed',
        backgroundColor: color,
        width: 100,
        height: 100,
        ...getPosition()
      }}
    >
      {icon}
    </Fab>
  )
}