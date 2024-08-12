import { styled } from "@mui/material"
import { ReactNode } from "react"

interface WaveProps {
  children?: ReactNode
}

const StyledSection = styled('section')`
  background-size: 100%;
  background-repeat: no-repeat;
  background-color: brown;
  min-height: 100vh;
  margin: 0;

  @media (min-width: 0px) {
    background-image: url("/wave-xs.svg");
  }

  @media (min-width: 600px) {
    background-image: url("/wave-s.svg");
  }

  @media (min-width: 900px) {
    background-image: url("/wave.svg");
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