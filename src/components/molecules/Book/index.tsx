import { Card, CardContent, CardMedia, Chip, Skeleton, Stack, Typography } from "@mui/material";
import { IBook } from "../../../interfaces";
import { BookCategoryEnum, BookCategoryColorsEnum } from "../../../enums";

class BookProps implements IBook {
  name: string = ""
  image: string = ""
  url: string = ""
  type: string = BookCategoryEnum.LITERATURA
}

export default function Book({
  name,
  image,
  url,
  type
}: BookProps) {

  function goTo() {
    window.open(url, '_blank')
  }

  function getColor(): string {
    return BookCategoryColorsEnum[type.toUpperCase()]
  }

  return (
    <Stack>
      <Card onClick={goTo} sx={{ borderRadius: '20px', backgroundColor: getColor() }}>
        <Stack sx={{ p: 2 }}>
          <Chip label={type} sx={{ width: '15ch', backgroundColor: 'yellow' }}></Chip>
        </Stack>
        <Stack sx={{ height: 300 }}>
          {
            image.length === 0 ?
              (
                <Skeleton variant='rectangular' width='100%' height='100%' animation='wave'/>
              ) :
              <CardMedia
                component='img'
                image={image}
                height='300'
              />
          }
        </Stack>
        <CardContent>
          <Typography variant='body2'>{name}</Typography>
        </CardContent>
      </Card>
    </Stack>
  )
}