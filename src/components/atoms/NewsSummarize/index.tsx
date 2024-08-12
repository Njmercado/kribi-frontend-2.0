import './index.css';
import { Card, CardActionArea, Typography } from "@mui/material";
import { INews } from "../../../interfaces";

export interface NewsSummarizeProps {
  news: INews
  onClick: (id: number) => void
}

export default function NewsSummarize({
  news, onClick
}: NewsSummarizeProps
) {
  return (
    <Card className='container' sx={{ backgroundColor: 'black', position: 'relative' }} onClick={() => onClick(news.id)}>
      <CardActionArea>
        <img src={news.image} alt="" width='100%' height='100%' style={{ objectFit: 'contain' }} />
      </CardActionArea>
      <div className='absolute'>
        <div className='wrapper'/>
        <div className='title'> <Typography variant='body1' sx={{ fontWeight: 'bold'}}>{news.name}</Typography> </div>
      </div>
    </Card>
  )
}