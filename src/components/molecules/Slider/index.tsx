'use client'

import { Pagination, Stack } from '@mui/material';
import { useState } from 'react';
import SwipeableViews from 'react-swipeable-views'
import { autoPlay } from 'react-swipeable-views-utils'

const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

export interface SliderProps {
  items: any[]
}

export default function Slider({
  items
}: SliderProps) {

  const [page, setPage] = useState<number>(1)

  return (
    <Stack direction={"row"} position={"relative"} width={"100%"}>
      <AutoPlaySwipeableViews
        style={{ width: '100%', }}
        index={page-1}
        onIndexChange={(index: number) => setPage(index)}
        enableMouseEvents
      >
        {
          items.map((item: any, index: number) => <div key={index}>{item}</div>)
        }
      </AutoPlaySwipeableViews>
      <Stack
        position={"absolute"}
        bottom={'30px'}
        height={"10px"}
        width={"100%"}
        alignItems={'center'}
      >
        <Pagination
          count={items.length}
          page={page}
          onChange={(event: any, value: number) => setPage(value)}
        />
      </Stack>
    </Stack>
  )
}