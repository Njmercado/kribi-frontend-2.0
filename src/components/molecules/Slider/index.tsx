'use client'

import { Pagination, Stack } from '@mui/material';
import { useState } from 'react';
import SwipeableViews from 'react-swipeable-views'
import { autoPlay } from 'react-swipeable-views-utils'

const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

const styles = {
  slide: {
    padding: 15,
    minHeight: 100,
    color: '#fff',
  },
  slide1: {
    background: '#FEA900',
  },
  slide2: {
    background: '#B3DC4A',
  },
  slide3: {
    background: '#6AC0FF',
  },
};

export default function Slider() {

  const [page, setPage] = useState<number>(1)

  return (
    <Stack direction={"row"} position={"relative"} width={"100%"}>
      <AutoPlaySwipeableViews
        style={{ width: '100%', }}
        index={page-1}
        onIndexChange={(index: number) => setPage(index)}
        enableMouseEvents
      >
        <div style={Object.assign({}, styles.slide, styles.slide1)}>
          slide n°1
        </div>
        <div style={Object.assign({}, styles.slide, styles.slide2)}>
          slide n°2
        </div>
        <div style={Object.assign({}, styles.slide, styles.slide3)}>
          slide n°3
        </div>
      </AutoPlaySwipeableViews>
      <Stack
        position={"absolute"}
        bottom={'30px'}
        height={"10px"}
        width={"100%"}
        alignItems={'center'}
      >
        <Pagination
          count={3}
          page={page}
          onChange={(event: any, value: number) => setPage(value)}
        />
      </Stack>
    </Stack>
  )
}