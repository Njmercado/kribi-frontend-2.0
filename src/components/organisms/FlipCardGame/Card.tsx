import { Typography } from "@mui/material";
import './index.css';

interface CardProps {
  id: number;
  content: string;
  isFlipped: boolean;
  isMatched: boolean;
  onClick: (id: number) => void;
}

export default function Card({ id, content, isFlipped, isMatched, onClick }: CardProps) {
  return (
    <div
      className={`flip-card ${isFlipped || isMatched ? 'flipped' : ''} ${isMatched ? 'matched' : ''}`}
      onClick={() => onClick(id)}
    >
      <div className="flip-card-inner">
        <div className="flip-card-front">
          <Typography variant="h3" sx={{ color: 'var(--white)' }}>?</Typography>
        </div>
        <div className="flip-card-back">
          <Typography variant="body1" sx={{ fontWeight: 'bold', fontSize: '0.9rem' }}>
            {content}
          </Typography>
        </div>
      </div>
    </div>
  );
}
