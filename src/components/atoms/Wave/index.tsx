import { styled } from "@mui/material"

interface WaveProps {
  children?: any
}

const StyledSection = styled('section')`
  background-size: 100%;
  background-repeat: no-repeat;
  background-color: transparent;
  margin: 0;

  @media (min-width: 0px) {
    background-image: url("/wave-xs.svg");
    min-height: 47vh;
  }

  @media (min-width: 600px) {
    background-image: url("/wave-s.svg");
    min-height: calc(30vh + 10vw);
  }

  @media (min-width: 900px) {
    background-image: url("/wave.svg");
    min-height: 35vh;
  } 

  @media (min-width: 1200px) {
    min-height: cac(46.5vh;
  }

  @media (min-width: 1536px) {
    min-height: calc(40vh + 10vw);
  }
`

export default function Wave({
  children,
}: WaveProps) {
  return (
    <StyledSection>
      {children}
    </StyledSection>
  )
}