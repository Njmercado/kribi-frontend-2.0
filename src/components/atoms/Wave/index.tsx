import { styled } from "@mui/material"

interface WaveProps {
  children?: any
}

const StyledSection = styled('section')`
  background-size: 100%;
  background-repeat: no-repeat;
  background-color: white;

  @media (min-width: 0px) {
    background-image: url("/wave-xs.svg");
    min-height: 20vh;
  }

  @media (min-width: 600px) {
    background-image: url("/wave-s.svg");
    min-height: 39vh;
  }

  @media (min-width: 900px) {
    background-image: url("/wave.svg");
    min-height: 35vh;
  } 

  @media (min-width: 1200px) {
    min-height: 46.5vh;
  }

  @media (min-width: 1536px) {
    min-height: 44.7vh;
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