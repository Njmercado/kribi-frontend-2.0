'use client'

import { Pagination, Stack } from '@mui/material';
import { ChangeEvent, ReactNode, useState } from 'react';
// @ts-expect-error This package is installed but dont know why is lunching an error
import SwipeableViews from 'react-swipeable-views'
// @ts-expect-error This package is installed but dont know why is lunching an error
import { autoPlay } from 'react-swipeable-views-utils'

const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

export interface SliderProps {
  items: ReactNode[]
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
          items.map((item: ReactNode, index: number) => <div key={index}>{item}</div>)
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
          // @ts-expect-error Event is not used but is necessary due i cant use destructure in the onChange function
          onChange={(event: ChangeEvent, value: number) => setPage(value)}
        />
      </Stack>
    </Stack>
  )
}